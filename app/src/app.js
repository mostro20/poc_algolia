/* global algoliasearch instantsearch */

const searchClient = algoliasearch(
  'C6JQEY7F0L',
  'key',
);

const search = instantsearch({
  indexName: 'poc_FederatedQAGOMA_v2',
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
        <a href="{{Multimedia}}" target="_blank">
          <img src="{{Multimedia}}" class="card-img-top" align="left" alt="{{NamLast}}" />
        </a>
        <div class="card-body">
          <div class="hit-name">
            <a href="{{Multimedia}}">
              {{#helpers.highlight}}{ "attribute": "TitMainTitle" }{{/helpers.highlight}}
            </a>
          </div>
          <div class="hit-description">
            {{#helpers.highlight}}{ "attribute": "NamFirst" }{{/helpers.highlight}}
            {{#helpers.highlight}}{ "attribute": "NamLast" }{{/helpers.highlight}}<br>
            {{#helpers.highlight}}{ "attribute": "NamOrganisation" }{{/helpers.highlight}}
          </div>
          <div class="hit-price">{{Date Created}}</div>
        </div>
        <div class="collapse" id="more-details">
          <dl>
            <dt>Summary</dt>
            <dd>{{ObjectSummaryData}}</dd>
            <dt>Date Created</dt>
            <dd>{{CreDateCreated}}</dd>
            <dt>Artist life (earliest-latest)<dt>
            <dd>{{BioBirthEarliestDate}} - {{BioDeathEarliestDate}}</dd>
            <dt>Party type</dt>
            <dd>{{NamPartyType}}</dd>
            <dt>Accession No.</dt>
            <dd>{{TitAccessionNo}}</dd>
            <dt>Object IRN</dt>
            <dd>{{ObjectIRN}}</dd>
            <dt>Credit</dt>
            <dd>{{AccCreditLineLocal}}</dd>
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
    { label: '9 results per page', value: 9 },
    { label: '18 results per page', value: 18, default: true },
    { label: '27 results per page', value: 27 },
    { label: '36 results per page', value: 36 },
  ],
  }),



  instantsearch.widgets.refinementList({
    container: '#facet2',
    attribute: 'CreDateCreated',
    searchable: true,
    limit: 5,
    searchablePlaceholder: 'Search year',
    showMore: true,
  }),

  instantsearch.widgets.refinementList({
    container: '#facet3',
    attribute: 'CrePlaceOfExecution',
    searchable: true,
    limit: 5,
    searchablePlaceholder: 'Search artist',
    showMore: true,
  }),

  instantsearch.widgets.refinementList({
    container: '#facet4',
    attribute: 'Country_tab',
    searchable: true,
    limit: 5,
    searchablePlaceholder: 'Search country',
    showMore: true,
  }),

  instantsearch.widgets.refinementList({
    container: '#facet5',
    attribute: 'NamPartyType',
    searchable: true,
    searchablePlaceholder: 'Search party type',
    showMore: true,
  }),

  instantsearch.widgets.refinementList({
    container: '#facet6',
    attribute: 'BioStates_tab',
    searchable: true,
    limit: 5,
    searchablePlaceholder: 'Search party type',
    showMore: true,
  }),

  instantsearch.widgets.refinementList({
    container: '#facet7',
    attribute: 'BioQldArtist',
    searchable: true,
    limit: 5,
    searchablePlaceholder: 'Search party type',
    showMore: true,
  }),

  instantsearch.widgets.refinementList({
    container: '#facet8',
    attribute: 'BioCulturalIdentity1_tab',
    searchable: true,
    limit: 5,
    searchablePlaceholder: 'Search party type',
    showMore: true,
  }),

  instantsearch.widgets.refinementList({
    container: '#facet9',
    attribute: 'BioCulturalIdentity2_tab',
    searchable: true,
    limit: 5,
    searchablePlaceholder: 'Search party type',
    showMore: true,
  }),

  instantsearch.widgets.refinementList({
    container: '#facet10',
    attribute: 'TitDepartment',
    searchable: true,
    limit: 5,
    searchablePlaceholder: 'Search party type',
    showMore: true,
  }),

  instantsearch.widgets.refinementList({
    container: '#facet11',
    attribute: 'PhyMediaCategory',
    searchable: true,
    limit: 5,
    searchablePlaceholder: 'Search party type',
    showMore: true,
  }),

  instantsearch.widgets.refinementList({
    container: '#facet12',
    attribute: 'PhySecondaryMediaCategory',
    searchable: true,
    limit: 5,
    searchablePlaceholder: 'Search party type',
    showMore: true,
  }),
]);

search.start();
