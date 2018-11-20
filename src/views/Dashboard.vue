<template>
  <div class="about">
    <v-layout row wrap>
      <v-flex sm12 md6 lg3>
        <app-widget-small class="ma-2"
          :cardTitle="'sprzedaż produktu'"
          :cardIcon="'bell'"
          :cardIconColor="'accent'"
          :cardFooterTxt="'za ostatnie 30 dni | per os.'"
          :mainInfo="'125.58%'"
          :mainInfoNumIndicator="'0.0'"
        ></app-widget-small>
      </v-flex>
      <v-flex sm12 md6 lg3>
        <app-widget-small class="ma-2"
            :cardTitle="'zamówienia produktu'"
            :cardIcon="'alarm-snooze'"
            :cardIconColor="'success'"
            :mainInfo="'2591.23 zł'"
        >
          <div class="success--text" slot="mainInfoAddOn">
            <span>9%</span>
            <v-icon color="success" small>mdi-arrow-up-thick</v-icon>
          </div>
        </app-widget-small>
      </v-flex>
      <v-flex sm12 md6 lg3>
        <app-widget-small class="ma-2"
          :cardIcon="'heart'"
          :cardIconColor="'success'"
          :cardFooterTxt="'YtY'"
          :mainInfo="'648'"

        >
          <div class="error--text" slot="mainInfoAddOn">
            <span>9%</span>
            <v-icon color="error" small>mdi-arrow-down-thick</v-icon>
          </div>
        </app-widget-small>
      </v-flex>
      <v-flex sm12 md6 lg3>
        <app-widget-small class="ma-2"
            :cardTitle="'ilość akcji marketingowych'"
            :mainInfoColor="'accent'"
            :cardFooterTxt="'ostatnie 12 m-cy'"
            :mainInfo="'125'"
        ></app-widget-small>
      </v-flex>
    </v-layout>

  </div>
</template>

