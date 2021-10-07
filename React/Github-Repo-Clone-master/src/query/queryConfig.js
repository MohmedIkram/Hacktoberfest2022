export const queryData = (username) => `{
    user(login: "${username.toString()}") {
      avatarUrl
      bio
      email
      followers {
        totalCount
      }
      following {
        totalCount
      }
      location
      login
      name
      repositories(first: 20, orderBy: {field: UPDATED_AT, direction: DESC}) {
        totalCount
        nodes {
          name
          updatedAt
          stargazerCount
          forkCount
          languages(first: 1, orderBy: {field: SIZE, direction: DESC}) {
            nodes {
              name
              color
            }
          }
          description
          url
          parent {
            forkCount
            name
            licenseInfo {
              name
            }
            languages(first: 1, orderBy: {field: SIZE, direction: DESC}) {
              nodes {
                color
                name
              }
            }
            isPrivate
            nameWithOwner
            url
          }
        }
      }
      twitterUsername
      websiteUrl
      status {
        emojiHTML
        emoji
        message
      }
      starredRepositories {
        totalCount
      }
      updatedAt
    }
  }`;
  
export const API_URL = 'https://api.github.com/graphql';

const token = process.env?.REACT_APP_API_TOKEN ?? '';
  
export const queryOptions = (username) => ({
  method: "POST",
  headers: {
    "Authorization": `bearer ${token}`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    query: queryData(username)
  }),
});