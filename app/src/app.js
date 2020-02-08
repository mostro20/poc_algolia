/* global algoliasearch instantsearch */

const searchClient = algoliasearch(
  'C6JQEY7F0L',
  'key'
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
      <div>
        <img src="{{Image_url}}" class="img-thumb" align="left" alt="{{name}}" />
        <div class="hit-name">
          {{#helpers.highlight}}{ "attribute": "Title" }{{/helpers.highlight}}
        </div>
        <div class="hit-description">
          {{#helpers.highlight}}{ "attribute": "Artist Lastname" }{{/helpers.highlight}}
        </div>
        <div class="hit-price">{{Date Created}}</div>
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

  instantsearch.widgets.refinementList({
    container: '#brand-list',
    attribute: 'Medium',
  })
]);

search.start();
