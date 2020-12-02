const { ApolloServer, gql } = require('apollo-server');
let students = [
  {
    "id": 1,
    "name": "Abdul Waqar",
    "Program": "MCS",
    "smester": "3rd"
  },
  {
    "id": 2,
    "name": "Fayaz Ahmad",
    "Program": "MCS",
    "smester": "3rd"
  },
  {
    "id": 3,
    "name": "Usman Fani",
    "Program": "BS IT",
    "smester": "3rd"
  },
  {
    "id": 4,
    "name": "Shahzad Ahmad",
    "Program": "BS IT",
    "smester": "7th"
  }
];
const typeDefs = gql`
  type Student {
    id:Int
    name: String
    Program: String
    smester:String
  }
  
  type Query {
    Students: [Student]
  }
  input InputStudent {
    id:Int
    name: String
    Program: String
    smester:String
  },
  type Mutation {    
    addStudent(input:InputStudent): Student
  }`;
const resolvers = {
  Query: {
    Students: () => students,
  },
  Mutation: {
    addStudent: (e, { input }) => {

      students.push(
        {
          id: input.id,
          name: input.name,
          Program: input.Program,
          smester: input.smester
        }
)
      return {
        id: input.id,
        name: input.name,
        Program: input.Program,
        smester: input.smester,
      }
    }
  }
};
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
