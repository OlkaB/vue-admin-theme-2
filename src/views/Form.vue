<template>
    <div>
        <h1>Formularz</h1>
         <v-layout justify-center>
            <v-flex xs12 sm10 md8 lg6>
            <v-card ref="form">
                <v-card-text>
                <v-text-field
                    ref="name"
                    v-model="name"
                    :rules="[() => !!name || 'This field is required']"
                    :error-messages="errorMessages"
                    label="Imię i nazwisko"
                    placeholder="Jan Nowak"
                    required
                ></v-text-field>
                <v-text-field
                    ref="address"
                    :rules="[
                    () => !!address || 'This field is required',
                    () => !!address && address.length <= 25 || 'Address must be less than 25 characters',
                    addressCheck
                    ]"
                    v-model="address"
                    label="Adres"
                    placeholder="Al. Jerozolimskie 138"
                    counter="25"
                    required
                ></v-text-field>
                <v-text-field
                    ref="city"
                    :rules="[() => !!city || 'This field is required', addressCheck]"
                    v-model="city"
                    label="Miasto"
                    placeholder="Warszawa"
                    required
                ></v-text-field>
                <v-text-field
                    ref="zip"
                    :rules="[() => !!zip || 'This field is required']"
                    v-model="zip"
                    label="Kod pocztowy"
                    required
                    placeholder="01-103"
                ></v-text-field>
                <v-autocomplete
                    ref="country"
                    :rules="[() => !!country || 'This field is required']"
                    :items="countries"
                    v-model="country"
                    label="Wojewodztwo"
                    placeholder="Wybierz z listy..."
                    required
                ></v-autocomplete>
                <v-radio-group v-model="radioGroup">
                    <v-radio label="Opcja 1" value="radio-1"></v-radio>
                    <v-radio label="Opcja 2" value="radio-2"></v-radio>
                </v-radio-group>
                </v-card-text>
                <v-divider class="mt-5"></v-divider>
                <v-card-actions>
                <v-btn flat>Anuluj</v-btn>
                <v-spacer></v-spacer>
                <v-slide-x-reverse-transition>
                    <v-tooltip
                    v-if="formHasErrors"
                    left
                    >
                    <v-btn
                        slot="activator"
                        icon
                        class="my-0"
                        @click="resetForm"
                    >
                        <v-icon>mdi-refresh</v-icon>
                    </v-btn>
                    <span>Wyczyśc formularz</span>
                    </v-tooltip>
                </v-slide-x-reverse-transition>
                <v-btn color="primary" flat @click="submit">Wyślij</v-btn>
                </v-card-actions>
            </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
  export default {
    data () {
        return {
            countries: ['mazowieckie', 'wielkopolskie', 'śląskie', 'zachodniopomorskie', 'pomorskie'],
            errorMessages: '',
            name: null,
            address: null,
            city: null,
            state: null,
            zip: null,
            country: null,
            formHasErrors: false
        }      
    },
    computed: {
      form () {
        return {
          name: this.name,
          address: this.address,
          city: this.city,
          state: this.state,
          zip: this.zip,
          country: this.country
        }
      }
    },

    watch: {
      name () {
        this.errorMessages = ''
      }
    },

    methods: {
      addressCheck () {
        this.errorMessages = this.address && !this.name
          ? 'Hey! I\'m required'
          : ''

        return true
      },
      resetForm () {
        this.errorMessages = []
        this.formHasErrors = false

        Object.keys(this.form).forEach(f => {
          this.$refs[f].reset()
        })
      },
      submit () {
        this.formHasErrors = false

        console.log("Form submit: ", this.form)

        Object.keys(this.form).forEach(f => {
          if (!this.form[f]) this.formHasErrors = true

          this.$refs[f].validate(true);
          console.log("Form field: ", this.$refs[f])
        })
      }
    }
  }
</script>
