<template>
  <div class="about">
    <v-layout row wrap>
      <v-flex lg12>
        <h2>Widget small</h2>
      </v-flex>
      <v-flex sm12 md6 lg3>
        <doz-widget-small class="ma-2"
          :cardTitle="'sprzedaż produktu'"
          :cardIcon="'bell'"
          :cardIconColor="'accent'"
          :cardFooterTxt="'za ostatnie 30 dni | per os.'"
          :mainInfoNumIndicator="'0.0'"
        ><doz-animate-number :number="'125.58'" :duration="'500'" :dataFilter="'decimal'"></doz-animate-number>%</doz-widget-small>
      </v-flex>
      <v-flex sm12 md6 lg4>
        <doz-widget-small class="ma-2"
            :cardTitle="'zamówienia produktu'"
            :cardIcon="'alarm-snooze'"
            :cardIconColor="'success'"
        >
          <doz-animate-number :number="'259.23'" :duration="'500'" :dataFilter="'decimal'"></doz-animate-number> zł
          <div class="success--text" slot="mainInfoAddOn">
            <span>9%</span>
            <v-icon color="success" small>mdi-arrow-up-thick</v-icon>
          </div>
        </doz-widget-small>
      </v-flex>
      <v-flex sm12 md6 lg2>
        <doz-widget-small class="ma-2"
          :cardIcon="'heart'"
          :cardIconColor="'success'"
          :cardFooterTxt="'YtY'"

        >
          648
          <div class="error--text" slot="mainInfoAddOn">
            <span>9%</span>
            <v-icon color="error" small>mdi-arrow-down-thick</v-icon>
          </div>
        </doz-widget-small>
      </v-flex>
      <v-flex sm12 md6 lg3>
        <doz-widget-small class="ma-2"
            :cardTitle="'ilość akcji marketingowych'"
            :mainInfoColor="'accent'"
            :badgeTitle="'12 m-cy'"
            :badgeColor="'success'"
        >125</doz-widget-small>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex lg12>
        <h2>Widget compare</h2>
      </v-flex>
      <v-flex sm12 md6 lg4>
        <doz-widget-compare class="ma-2"
          :cardColor="'success'"
          :cardTitle="'Całkowita sprzedaż'"
          :cardFooterTxt="'4% higher than last month'"
          :progressVal="'63'"
          :data="[{title: 'Overall Sales', value: 2456}, {title: 'Today\'s', value: 756}, {title: 'Monthly', value: 1256}]"
        ></doz-widget-compare>
      </v-flex>

      <v-flex sm12 md6 lg4>
        <doz-widget-compare class="ma-2"
          :cardColor="'accent'"
          :cardTitle="'Liczba wejśc na stronę'"
          :cardFooterTxt="'* unikatowych'"
          :progressVal="'78'"
          :data="[{title: 'Overall entrances', value: 789}, {title: 'Today\'s', value: 56}, {title: 'Monthly', value: 230}]"
        ></doz-widget-compare>
      </v-flex>

      <v-flex sm12 md6 lg4>
        <doz-widget-compare class="ma-2"
          :cardColor="'purple'"
          :cardTitle="'Liczba wejśc na stronę'"
          :cardFooterTxt="'* lorem ipsum'"
          :progressVal="'25'"
          :data="[{title: 'Overall entrances', value: 65}, {title: 'Today\'s', value: 23}, {title: 'Monthly', value: 43}]"
        ></doz-widget-compare>
      </v-flex>
    </v-layout>

    
    <v-layout row wrap>
    </v-layout>
  </div>
</template>

<script>
export default {
  computed: {
    dataX() {
      
    }
  }
}
</script>


