const { AuthenticationError } = require("apollo-server-express");
const { User, Thought } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },

    },

    Mutation: {
      saveBook: async (parent, { bookData }, { user }) => {
        if (user) {
          const updatedUser = await User.findByIdAndUpdate(
            { _id: user._id },
            { $addToSet: { savedBooks: bookData } },
            { new: true }
          );

          return updatedUser;
        }

        throw new AuthenticationError("You need to be logged in!");
      },
      removeBook: async (parent, { bookId }, { user }) => {
        if (user) {
          const updatedUser = await User.findOneAndUpdate(
            { _id: user._id },
            { $pull: { savedBooks: { bookId: bookId } } },
            { new: true }
          );

          return updatedUser;
        }

        throw new AuthenticationError("You have to be logged in!");
      },
      addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);

        return { token, user };
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });

        if (!user) {
          throw new AuthenticationError("Incorrect credentials");
        }

        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
          throw new AuthenticationError("Incorrect credentials");
        }

        const token = signToken(user);
        return { token, user };
      
    },
  },
};

module.exports = resolvers;
