export default {
    data(){
        return {
            labels:[],
            columnProps:[],
            tableData:[]
        }
    },
    props:{
        treeData:{
            type:Array,
            default(){
                return [];
            }
        }
    },
    watch:{
        treeData:{
            deep:true,
            handler(val){
                this.tableData = val;
            }
        }
    }
}
