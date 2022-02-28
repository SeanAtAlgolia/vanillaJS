import _ from "lodash";
import algoliasearch from "algoliasearch/lite";
import instantsearch from "instantsearch.js";
import { searchBox, hits } from "instantsearch.js/es/widgets";

import "instantsearch.css/themes/satellite.css";

const searchClient = algoliasearch(
  "FKOQ4JOZSE",
  "4233f3625bbc1f27a5c7b3859a6e1a24"
);

const search = instantsearch({
  indexName: "WorkRamp Index",
  searchClient,
});

search.addWidgets([
  searchBox({
    container: "#searchbox",
  }),

  hits({
    container: "#hits",
    templates: {
      item: `
      <h2>
        {{ __hitIndex }}:
        {{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}
      </h2>
      <p>{{ description }}</p>
    `,
    },
  }),
]);

search.start();
