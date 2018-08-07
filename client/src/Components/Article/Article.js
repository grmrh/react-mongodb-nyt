import React from "react";
import "./Article.css";

const Article = () => (

  <div class="row">
    <div class="col-sm-12">
      <br />

      {/* This panel will initially be made up of a panel and wells for each of the articles retrieved */}
      <div class="panel panel-primary">

        {/* Panel Heading for the retrieved articles box */}
        <div class="panel-heading">
          <h3 class="panel-title">
            <strong>
              <i class="fa fa-table"></i> Top Articles</strong>
          </h3>
        </div>

         {/* This main panel will hold each of the resulting articles */}
        <div class="panel-body" id="well-section">
        </div>
      </div>
    </div>
  </div>
  
);

export default Article;
