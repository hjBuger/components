<template>
    <td
        class="tree-table-column"
        :label="label"
        :prop="prop"
    >
        <slot></slot>
    </td>
</template>

<script>
    export default {
        name: "tree-table-column",
        data(){
            return {
                propName:''
            }
        },
        props:{
            type:String,
            width:String,
            align:String,
            prop:String,
            label:String,
            minWidth:String
        },
        watch:{
            prop(val){
                this.propName = val;
            },
            propName(){
                this.setColumnData()
            }
        },
        methods:{
            setColumnData(){
                this.$parent.setColumnData({
                    prop:this.prop,
                    label:this.label
                })
            }
        },
        created(){
            this.setColumnData();
        }
    }
</script>

<style lang="less" scoped>

</style>
