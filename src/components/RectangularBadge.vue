<template>
    <span class="o-badge white--text" v-bind:class="badgeColor + ' ' + badgeClass">
        <slot></slot>
    </span>
</template>

<script>
    export default {
        props: ['badgeColor', 'badgeClass']
    }
</script>

<style lang="scss" scoped>
    .o-badge {
        display: inline-block;
        padding: .25em .4em;
        line-height: 1;
        text-align: center;
        vertical-align: baseline;
        border-radius: .25rem;
        font-size: 11px;
        font-weight: 600;
        padding-bottom: 4px;
        padding-left: 6px;
        padding-right: 6px;
        text-shadow: none;
        white-space: nowrap;
    }
</style>
