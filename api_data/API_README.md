# Ycombinator API

## Current working API "OPTS"

```
x-algolia-agent: Algolia%20for%20JavaScript%20(4.11.0)%3B%20Browser%20(lite)
x-algolia-api-key: YjVhMWQ1OGEwZTBkNzc3MTk0NzJjODFjMDNjOTM3ODlmZGY0ODdmZTc2OGY3NGY0NGU3ZGIwYTk0ZDJlYWYyZHJlc3RyaWN0SW5kaWNlcz0lNUIlMjJMYXVuY2hlc19wcm9kdWN0aW9uJTIyJTJDJTIyTGF1bmNoZXNfYnlfZGF0ZV9wcm9kdWN0aW9uJTIyJTVEJnRhZ0ZpbHRlcnM9JTVCJTIyeWNkY19wdWJsaWMlMjIlNUQmYW5hbHl0aWNzVGFncz0lNUIlMjJ5Y2RjJTIyJTVE
x-algolia-application-id: 45BWZJ1SGC
```

api-key and application-id can be found in global variable `window.AlgoliaOpts`
(they are same on 3 devices in 3 different places)

## Indexes used in ALL endpoints

| Index name                  | Index functionality |
| --------------------------- | ------------------- |
| Launches_production         | Sorts by votes      |
| Launches_by_date_production | Sorts by date       |

## Parameters required in ALL endpoints

```
x-algolia-agent
x-algolia-api-key
x-algolia-application-id
```

#### Default parameters example (working)

`x-algolia-agent=Algolia%20for%20JavaScript%20(4.11.0)%3B%20Browser%20(lite)&x-algolia-api-key=YjVhMWQ1OGEwZTBkNzc3MTk0NzJjODFjMDNjOTM3ODlmZGY0ODdmZTc2OGY3NGY0NGU3ZGIwYTk0ZDJlYWYyZHJlc3RyaWN0SW5kaWNlcz0lNUIlMjJMYXVuY2hlc19wcm9kdWN0aW9uJTIyJTJDJTIyTGF1bmNoZXNfYnlfZGF0ZV9wcm9kdWN0aW9uJTIyJTVEJnRhZ0ZpbHRlcnM9JTVCJTIyeWNkY19wdWJsaWMlMjIlNUQmYW5hbHl0aWNzVGFncz0lNUIlMjJ5Y2RjJTIyJTVE&x-algolia-application-id=45BWZJ1SGC`

## GET all launches

`GET https://45bwzj1sgc-dsn.algolia.net/1/indexes/{index_name}?{default_params}`

#### Example sorted by votes:

`GET https://45bwzj1sgc-dsn.algolia.net/1/indexes/Launches_production?x-algolia-agent=Algolia%20for%20JavaScript%20(4.11.0)%3B%20Browser%20(lite)&x-algolia-api-key=YjVhMWQ1OGEwZTBkNzc3MTk0NzJjODFjMDNjOTM3ODlmZGY0ODdmZTc2OGY3NGY0NGU3ZGIwYTk0ZDJlYWYyZHJlc3RyaWN0SW5kaWNlcz0lNUIlMjJMYXVuY2hlc19wcm9kdWN0aW9uJTIyJTJDJTIyTGF1bmNoZXNfYnlfZGF0ZV9wcm9kdWN0aW9uJTIyJTVEJnRhZ0ZpbHRlcnM9JTVCJTIyeWNkY19wdWJsaWMlMjIlNUQmYW5hbHl0aWNzVGFncz0lNUIlMjJ5Y2RjJTIyJTVE&x-algolia-application-id=45BWZJ1SGC`

**CURL**

`curl --location --request GET 'https://45bwzj1sgc-dsn.algolia.net/1/indexes/Launches_production?x-algolia-agent=Algolia%20for%20JavaScript%20(4.11.0)%3B%20Browser%20(lite)&x-algolia-api-key=YjVhMWQ1OGEwZTBkNzc3MTk0NzJjODFjMDNjOTM3ODlmZGY0ODdmZTc2OGY3NGY0NGU3ZGIwYTk0ZDJlYWYyZHJlc3RyaWN0SW5kaWNlcz0lNUIlMjJMYXVuY2hlc19wcm9kdWN0aW9uJTIyJTJDJTIyTGF1bmNoZXNfYnlfZGF0ZV9wcm9kdWN0aW9uJTIyJTVEJnRhZ0ZpbHRlcnM9JTVCJTIyeWNkY19wdWJsaWMlMjIlNUQmYW5hbHl0aWNzVGFncz0lNUIlMjJ5Y2RjJTIyJTVE&x-algolia-application-id=45BWZJ1SGC'`

---

#### Or sorted by date:

`GET https://45bwzj1sgc-dsn.algolia.net/1/indexes/Launches_by_date_production?x-algolia-agent=Algolia%20for%20JavaScript%20(4.11.0)%3B%20Browser%20(lite)&x-algolia-api-key=YjVhMWQ1OGEwZTBkNzc3MTk0NzJjODFjMDNjOTM3ODlmZGY0ODdmZTc2OGY3NGY0NGU3ZGIwYTk0ZDJlYWYyZHJlc3RyaWN0SW5kaWNlcz0lNUIlMjJMYXVuY2hlc19wcm9kdWN0aW9uJTIyJTJDJTIyTGF1bmNoZXNfYnlfZGF0ZV9wcm9kdWN0aW9uJTIyJTVEJnRhZ0ZpbHRlcnM9JTVCJTIyeWNkY19wdWJsaWMlMjIlNUQmYW5hbHl0aWNzVGFncz0lNUIlMjJ5Y2RjJTIyJTVE&x-algolia-application-id=45BWZJ1SGC`

**CURL**

`curl --location --request GET 'https://45bwzj1sgc-dsn.algolia.net/1/indexes/Launches_by_date_production?x-algolia-agent=Algolia%20for%20JavaScript%20(4.11.0)%3B%20Browser%20(lite)&x-algolia-api-key=YjVhMWQ1OGEwZTBkNzc3MTk0NzJjODFjMDNjOTM3ODlmZGY0ODdmZTc2OGY3NGY0NGU3ZGIwYTk0ZDJlYWYyZHJlc3RyaWN0SW5kaWNlcz0lNUIlMjJMYXVuY2hlc19wcm9kdWN0aW9uJTIyJTJDJTIyTGF1bmNoZXNfYnlfZGF0ZV9wcm9kdWN0aW9uJTIyJTVEJnRhZ0ZpbHRlcnM9JTVCJTIyeWNkY19wdWJsaWMlMjIlNUQmYW5hbHl0aWNzVGFncz0lNUIlMjJ5Y2RjJTIyJTVE&x-algolia-application-id=45BWZJ1SGC'`

### Other filters:

| Parameter    | type   | function                                     |
| ------------ | ------ | -------------------------------------------- |
| query        | String | search for a specific string                 |
| hitsPerPage  | Number | Number of results per page                   |
| page         | Number | Number of page (default: 0)                  |
| facetFilters | array  | filter companies by batch, industry, or tags |

#### FacetFilters:

| Filter           |
| ---------------- |
| company.tags     |
| company.batch    |
| company.industry |

### Examples:

Search for a specific word in endpoint:

`GET https://45bwzj1sgc-dsn.algolia.net/1/indexes/{index_name}?query={query}&{default_params}`

**CURL**

`curl --location --request GET 'https://45bwzj1sgc-dsn.algolia.net/1/indexes/Launches_by_date_production?query=api&x-algolia-agent=Algolia%20for%20JavaScript%20(4.11.0)%3B%20Browser%20(lite)&x-algolia-api-key=YjVhMWQ1OGEwZTBkNzc3MTk0NzJjODFjMDNjOTM3ODlmZGY0ODdmZTc2OGY3NGY0NGU3ZGIwYTk0ZDJlYWYyZHJlc3RyaWN0SW5kaWNlcz0lNUIlMjJMYXVuY2hlc19wcm9kdWN0aW9uJTIyJTJDJTIyTGF1bmNoZXNfYnlfZGF0ZV9wcm9kdWN0aW9uJTIyJTVEJnRhZ0ZpbHRlcnM9JTVCJTIyeWNkY19wdWJsaWMlMjIlNUQmYW5hbHl0aWNzVGFncz0lNUIlMjJ5Y2RjJTIyJTVE&x-algolia-application-id=45BWZJ1SGC'`

***

- Filter companies by tags:

  1. **Single Tags**  
     using: `["company.tags: Education"]`  
      as url encoded = `%5B%22company.tags%3A%20Education%22%5D`  
     **Example**  
     `GET https://45bwzj1sgc-dsn.algolia.net/1/indexes/{index_name}?facetFilters={url_encoded_filter}&{default_params}`  
      **CURL**  
     `curl --location --request GET 'https://45bwzj1sgc-dsn.algolia.net/1/indexes/Launches_by_date_production?facetFilters=%5B%22company.tags%3A%20Education%22%5D&x-algolia-agent=Algolia%20for%20JavaScript%20(4.11.0)%3B%20Browser%20(lite)&x-algolia-api-key=YjVhMWQ1OGEwZTBkNzc3MTk0NzJjODFjMDNjOTM3ODlmZGY0ODdmZTc2OGY3NGY0NGU3ZGIwYTk0ZDJlYWYyZHJlc3RyaWN0SW5kaWNlcz0lNUIlMjJMYXVuY2hlc19wcm9kdWN0aW9uJTIyJTJDJTIyTGF1bmNoZXNfYnlfZGF0ZV9wcm9kdWN0aW9uJTIyJTVEJnRhZ0ZpbHRlcnM9JTVCJTIyeWNkY19wdWJsaWMlMjIlNUQmYW5hbHl0aWNzVGFncz0lNUIlMjJ5Y2RjJTIyJTVE&x-algolia-application-id=45BWZJ1SGC'`

  ***

  2. **Multiple tags**  
     tag1 ==AND== tag2  
     using: `["company.tags: Education", "company.tags: Developer Tools"]`  
     as url encoded = `%5B%22company.tags%3A%20Education%22%2C%20%22company.tags%3A%20Developer%20Tools%22%5D`  
     **Example:**  
     `GET https://45bwzj1sgc-dsn.algolia.net/1/indexes/{index_name}?facetFilters={url_encoded_filter}&{default_params}`  
     tag1 ==OR== tag2  
     `[["company.tags: Education", "company.tags: Developer Tools"]]`  
     
     **CURL**  
     
     `curl --location --request GET 'https://45bwzj1sgc-dsn.algolia.net/1/indexes/Launches_by_date_production?facetFilters=%5B%22company.tags%3A%20Education%22%2C%20%22company.tags%3A%20Developer%20Tools%22%5D&x-algolia-agent=Algolia%20for%20JavaScript%20(4.11.0)%3B%20Browser%20(lite)&x-algolia-api-key=YjVhMWQ1OGEwZTBkNzc3MTk0NzJjODFjMDNjOTM3ODlmZGY0ODdmZTc2OGY3NGY0NGU3ZGIwYTk0ZDJlYWYyZHJlc3RyaWN0SW5kaWNlcz0lNUIlMjJMYXVuY2hlc19wcm9kdWN0aW9uJTIyJTJDJTIyTGF1bmNoZXNfYnlfZGF0ZV9wcm9kdWN0aW9uJTIyJTVEJnRhZ0ZpbHRlcnM9JTVCJTIyeWNkY19wdWJsaWMlMjIlNUQmYW5hbHl0aWNzVGFncz0lNUIlMjJ5Y2RjJTIyJTVE&x-algolia-application-id=45BWZJ1SGC'`

  ***

- Filter companies by industry:
  difference example: `["company.industry: B2B Software and Services"]`

- Filter companies by batch:
  difference example: `["company.batch: S2022"]`

[Available tags](tags.json)

[Available industries](industries.json)

[Available batches](batches.json)

### Response structure

```
├── hits
├───0                //list of results (structure is for every hit)
│   ├── id
│   ├── title
│   ├── body
│   ├── tagline
│   ├── created_at
│   ├── company
│   │   ├── id
│   │   ├── name
│   │   ├── url
│   │   ├── slug
│   │   ├── logo
│   │   ├── tags
│   │   ├── batch
│   │   └── industry
│   ├── user
│   │   ├── name
│   │   └── avatar
│   ├── total_vote_count
│   ├── objectID          //IMPORTANT for fetching the post later
│   ├── _highlightResult  //What happens on highlight
│   │   ├── ...           //Basically same info
│   │   └── ...
│   └── _tags
│       └── ...          //Post tags (Different from company tags, default = ycdc_public)
├── nbHits               //Number of results
├── page                 //Number of page you are in
├── hitsPerPage          //The amount of hits per page(reflects your get request, defaults to 20)
├── query                //Your search query(reflects your request)
└── params               //Parameters in your search

```

---

## GET a specific launch

Format:

`GET https://45bwzj1sgc-dsn.algolia.net/1/indexes/{index_name}/{object_ID}?{default_params}`

**Example**

`GET https://45bwzj1sgc-dsn.algolia.net/1/indexes/Launches_by_date_production/post_64209?x-algolia-agent=Algolia%20for%20JavaScript%20(4.11.0)%3B%20Browser%20(lite)&x-algolia-api-key=YjVhMWQ1OGEwZTBkNzc3MTk0NzJjODFjMDNjOTM3ODlmZGY0ODdmZTc2OGY3NGY0NGU3ZGIwYTk0ZDJlYWYyZHJlc3RyaWN0SW5kaWNlcz0lNUIlMjJMYXVuY2hlc19wcm9kdWN0aW9uJTIyJTJDJTIyTGF1bmNoZXNfYnlfZGF0ZV9wcm9kdWN0aW9uJTIyJTVEJnRhZ0ZpbHRlcnM9JTVCJTIyeWNkY19wdWJsaWMlMjIlNUQmYW5hbHl0aWNzVGFncz0lNUIlMjJ5Y2RjJTIyJTVE&x-algolia-application-id=45BWZJ1SGC`

**CURL**  

`curl --location --request GET 'https://45bwzj1sgc-dsn.algolia.net/1/indexes/Launches_by_date_production/post_64209?x-algolia-agent=Algolia%20for%20JavaScript%20(4.11.0)%3B%20Browser%20(lite)&x-algolia-api-key=YjVhMWQ1OGEwZTBkNzc3MTk0NzJjODFjMDNjOTM3ODlmZGY0ODdmZTc2OGY3NGY0NGU3ZGIwYTk0ZDJlYWYyZHJlc3RyaWN0SW5kaWNlcz0lNUIlMjJMYXVuY2hlc19wcm9kdWN0aW9uJTIyJTJDJTIyTGF1bmNoZXNfYnlfZGF0ZV9wcm9kdWN0aW9uJTIyJTVEJnRhZ0ZpbHRlcnM9JTVCJTIyeWNkY19wdWJsaWMlMjIlNUQmYW5hbHl0aWNzVGFncz0lNUIlMjJ5Y2RjJTIyJTVE&x-algolia-application-id=45BWZJ1SGC'`

**Most of the time object_ID is `post_{PostID}`**

response structure same as "hits" but only one result

```
  ├── id
  ├── title
  ├── body
  ├── tagline
  ├── created_at
  ├── company
  │   ├── id
  │   ├── name
  │   ├── url
  │   ├── slug
  │   ├── logo
  │   ├── tags
  │   ├── batch
  │   └── industry
  ├── user
  │   ├── name
  │   └── avatar
  ├── total_vote_count
  ├── objectID          //IMPORTANT for fetching the post later
  └── _tags
      └── ...           //Post tags (Different from company tags, default = ycdc_public)
```
