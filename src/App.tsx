import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Routes from "./Routes";

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_URL}/graphql`,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
        <Routes/>
    </ApolloProvider>
  );
}

export default App;