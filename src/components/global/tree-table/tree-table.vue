<template>
    <table
        class="tree-table"
        border="0"
        cellSpacing="0"
        cellPadding="10"
    >
        <thead>
            <tr><th v-for="label in labels">{{label}}</th></tr>
        </thead>
        <tbody>
            <tr v-for="item in tableData">
                <slot :rows="item"></slot>
            </tr>
        </tbody>
    </table>
</template>

<script>
    import datas from './datas.js'
    import attributes from './attributes.js'
    import events from './events.js'
    import methods from "./methods";
    export default {
        name: "tree-table",
        mixins:[datas,attributes,events,methods]
    }
</script>

<style lang="less" scoped>
    @borderColor: #eee;
    @hoverColor: #e9eaec;
    @activeColor: #ffd9ab;
    @stripeColor: #f8f9fb;
    .tree-table{
        width: 100%;

        th, td{
            font-size: 13px;
            line-height: 23px;
        }

        th{
            font-weight: normal;
        }
        thead{
            tr{
                background: @stripeColor;
                &:hover{
                    background: @hoverColor;
                }
            }
        }
        tbody{
            tr{
                &:nth-of-type(even){
                    background: @stripeColor;
                }
                &:hover{
                    background: @hoverColor;
                }
            }
        }

        &.border-table{
            th, td{
                border:1px solid @borderColor;
                border-right: 0;
                border-bottom: 0;

                &:first-of-type{
                    border-left:0;
                }
            }
            tbody tr:last-of-type{
                td{
                    border-bottom: 1px solid @borderColor;
                }
            }
        }
    }
</style>
