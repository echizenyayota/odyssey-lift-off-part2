const resolvers = {
  Query: {
    tracksForHome: (_, __, {dataSources}) => {
      return dataSources.trackAPI.getTracksForHome();
    }, 
    Track: {
      author: ({authorID}, _, {dataSources}) => {
        return dataSources.trackAPI.getAuthor(authorID);
      }
    }
  }
};

module.export = resolvers;