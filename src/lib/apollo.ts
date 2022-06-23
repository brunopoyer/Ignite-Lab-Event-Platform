import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4rb92r70uqs01z5ez3a65n4/master',
    cache: new InMemoryCache()
});