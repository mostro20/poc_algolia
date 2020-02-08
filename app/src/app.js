/* global algoliasearch instantsearch */

const searchClient = algoliasearch(
  'C6JQEY7F0L',
  'key',
);

const search = instantsearch({
  indexName: 'poc_FederatedQAGOMA',
  searchClient,
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),

  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
      <div class="card">
        <a href="{{Image_url}}">
          <img src="{{Image_url}}" class="card-img-top" align="left" alt="{{name}}" />
        </a>
        <div class="card-body">
          <div class="hit-name">
            <a href="{{Image_url}}">
              {{#helpers.highlight}}{ "attribute": "Title" }{{/helpers.highlight}}
            </a>
          </div>
          <div class="hit-description">
            {{#helpers.highlight}}{ "attribute": "Artist Lastname" }{{/helpers.highlight}}
          </div>
          <div class="hit-price">{{Date Created}}</div>
        </div>
      </div>
      `,
    },
  }),

  instantsearch.widgets.pagination({
    container: '#pagination',
  }),

]);

search.addWidgets([
  instantsearch.widgets.currentRefinements({
    container: '#current-refinements',
  }),

  instantsearch.widgets.stats({
    container: '#stats',
  }),

  instantsearch.widgets.hitsPerPage({
  container: '#hits-per-page',
  items: [
    { label: '8 hits per page', value: 8, default: true },
    { label: '16 hits per page', value: 16 },
    { label: '24 hits per page', value: 24 },
    { label: '32 hits per page', value: 32 },
  ],
  }),

  instantsearch.widgets.refinementList({
    container: '#facet1',
    attribute: 'Medium',
  }),

  instantsearch.widgets.refinementList({
    container: '#facet2',
    attribute: 'Date Created',
  }),

  instantsearch.widgets.refinementList({
    container: '#facet3',
    attribute: 'Artist Lastname',
  }),

  instantsearch.widgets.refinementList({
    container: '#facet4',
    attribute: 'Country',
  })
]);

search.start();
