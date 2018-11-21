<template>
<div>
   <GChart
    type="ColumnChart"
    :data="chartDataCol"
    :options="chartOptionsCol"
      style="max-height: 200px;"
  />
<hr>
  <GChart
    type="BarChart" 
    :data="chartDataBar"
    :options="chartOptionsBar"
    @ready="onChartReady2"
      style="max-height: 200px;"
  />
<hr>
  <GChart      
      type="BubbleChart"    
      :data="chartDataBubble"
      :options="chartOptionsBubble"
      style="max-height: 200px;"
    />
<hr>
  <GChart      
      type="GeoChart"    
      :data="chartDataGeo"
      :options="chartOptionsGeo"
      style="max-width: 600px;"
      @regionClick="onGeoClick"
    />
</div>
</template>

<script>
export default {
  data () {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartDataCol: [
        ['Rok', 'Sprzedaż', 'Wydatki', 'Zyski'],
        ['2014', 1000, 400, 200],
        ['2015', 1170, 460, 250],
        ['2016', 660, 1120, 300],
        ['2017', 1030, 540, 350]
      ],
      chartOptionsCol: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        }
      },

      chartsLib: null, 
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartDataBar: [
        ['Year', 'Sales', 'Expenses', 'Profit'],
        ['2014', 1000, 400, 200],
        ['2015', 1170, 460, 250],
        ['2016', 660, 1120, 300],
        ['2017', 1030, 540, 350]
      ],

      chartDataBubble: [
        ["ID", "X", "Y", "Temperature"],
        ["", 80, 167, 120],
        ["", 79, 136, 130],
        ["", 78, 184, 50],
        ["", 72, 278, 230],
        ["", 81, 200, 210],
        ["", 72, 170, 100],
        ["", 68, 477, 80]
      ],
      chartOptionsBubble: {
        colorAxis: { colors: ["yellow", "red"] }
      },
      chartDataGeo: [
        ['Country', 'Popularity', 'Population'],
        ['Warszawa', 200, 2761477],
        ['Koszalin', 500, 380181],
        ['Kraków', 300, 1324110],
        ['Białystok', 600, 67370],
        ['Gdańsk', 400, 959574],
        ['Sosnowiec', 700, 38262]
      ],
      chartOptionsGeo: {
        region: 'PL',
        displayMode: 'markers',
        colorAxis: {colors: ['red', 'yellow', 'green']},        
        backgroundColor: {
          fill: 'transparent',
          stroke: '#ffffff',
        },
        resolution: 'provinces'
      }
    }
  },
  computed: {
    chartOptionsBar () {
      return {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017'
        },
        bars: 'horizontal', // Required for Material Bar Charts.
        hAxis: { format: 'decimal' },
        height: 400,
        colors: ['#1b9e77', '#d95f02', '#7570b3'],
      }
    }
  },
  methods: {
    onChartReady2 (chart, google) {
      this.chartsLib = google;
      console.log("onChartReady BAR");
    },
    onGeoClick(region) {
      console.log("onGeoClick: ", region)
    }
  },
}
</script>
