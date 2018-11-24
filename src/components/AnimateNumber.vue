<template>
    <span class="o-animate-num">{{displayNumber | decimal(this.decimalPlaces) | number }}</span>
</template>

<script>
export default {
    props: ['number', 'duration', 'filter'],
    data: function(){
        return {
            initalNum: 0,
            displayNumber: 0,
            interval:false,
        }
    },
    computed: {
        numberToNumber: function() {
            return parseFloat(this.number)
        },
        durationTime: function() {
            return this.duration || 3000;
        },
        incrementVal: function() {
            return this.numberToNumber / (this.durationTime / 50);
        },
        decimalPlaces: function() {
            return this.numberToNumber.toString().split(".")[1] ? this.numberToNumber.toString().split(".")[1].length : 0;
        }
    },
    mounted:function(){
        this.initalNum = 1;
    },
    watch:{
        initalNum: function() {  
            clearInterval(this.$options.interval); //required to stop the interval after update
            this.$options.interval = setInterval(function() {
                if(this.initalNum >= this.numberToNumber) {
                    this.initalNum = this.numberToNumber;
                    clearInterval(this.$options.interval);
                } else {
                    this.initalNum = this.initalNum + this.incrementVal;
                    this.displayNumber = this.initalNum.toFixed(this.decimalPlaces) ;
                }
            }.bind(this), 50);
        }
    }
}
</script>
