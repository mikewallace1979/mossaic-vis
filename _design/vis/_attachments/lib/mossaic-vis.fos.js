(function() {
  if (typeof(Mossaic) === "undefined") {
    Mossaic = {};
  }
  if (typeof(Mossaic.Views) === "undefined") {
    Mossaic.Views = {};
  }
  Mossaic.Views.Fos = Backbone.View.extend({
    initialize: function(collection, options) {
      _.bindAll(this);
      this.collection = collection;
      this.collection.bind("reset", this.draw);
      this.div = d3.select(options.divname);
      this.width = options.width;
      this.height = options.height;
    },
    draw: function() {
      var max_x = d3.max(this.collection.toJSON(), function(d) {
        return d.key[2];
      });
      var x = d3.scale.linear()
      .domain([0, max_x])
      .range([0, this.width]);

      var y = d3.scale.linear()
      .domain([0, 2])
      .rangeRound([this.height, 0]);

      var chart = this.div.append("svg:svg")
        .attr("class", "chart")
        .attr("width", this.width)
        .attr("height", this.height);

      var data = this.collection.toJSON();
      chart.selectAll("circle")
        .data(data)
          .enter()
          .append("svg:circle")
            .attr("cx", function(d, i) {
              return x(d.key[2]);
            })
            .attr("cy", function(d, i) {
              return y(d.value);
            })
            .attr("r", 1)
            .style("fill", "#CCCCCC");
      chart.append("svg:line")
        .attr("x1", 0)
        .attr("y1", this.height)
        .attr("x2", this.width)
        .attr("y2", this.height)
        .style("fill", "#000000");
      chart.append("svg:line")
        .attr("x1", 0)
        .attr("y1", this.height)
        .attr("x2", 0)
        .attr("y2", 0)
        .style("fill", "#000000");
    }
  });
})();