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
        <a href="{{Image_url}}" target="_blank">
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
        <div class="collapse" id="more-details">
          <dl>
            <dt>Title</dt>
            <dd>{{Title}}</dd>
            <dt>Date Created</dt>
            <dd>{{Date Created}}</dd>
            <dt>Credit</dt>
            <dd>{{Credit}}</dd>
            <dt>Accession No.</dt>
            <dd>{{Accession No}}</dd>
          </dl>
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
    { label: '9 results per page', value: 9, default: true },
    { label: '18 results per page', value: 18 },
    { label: '27 results per page', value: 27 },
    { label: '36 results per page', value: 36 },
  ],
  }),

  instantsearch.widgets.refinementList({
    container: '#facet1',
    attribute: 'Medium',
    searchable: true,
    searchablePlaceholder: 'Search media',
    showMore: true,
  }),

  instantsearch.widgets.refinementList({
    container: '#facet2',
    attribute: 'Date Created',
    searchable: true,
    searchablePlaceholder: 'Search year',
    showMore: true,
  }),

  instantsearch.widgets.refinementList({
    container: '#facet3',
    attribute: 'Artist Lastname',
    searchable: true,
    searchablePlaceholder: 'Search artist',
    showMore: true,
  }),

  instantsearch.widgets.refinementList({
    container: '#facet4',
    attribute: 'Country',
    searchable: true,
    searchablePlaceholder: 'Search country',
    showMore: true,
  })
]);

search.start();
