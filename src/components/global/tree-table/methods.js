export default {
    methods:{
        setColumnData(data){
            let newSet = new Set(this.labels);
            let newSet2 = new Set(data.columnProps);
            newSet.add(data.label);
            newSet2.add(data.prop);
            this.labels = [...newSet];
            this.columnProps = [...newSet2];
            console.log('setColumnData data: ',data);
        }
    }
}
