<template>
    <div class="home">
        <tree-table :tree-data="tableData" v-slot="slotProps">
            <tree-table-column label="项目名称" prop="projectName">{{slotProps.rows.projectName}}</tree-table-column>
            <tree-table-column label="项目指标" prop="projectIndex">{{slotProps.rows.projectIndex}}</tree-table-column>
            <tree-table-column label="项目节点" prop="projectCode">{{slotProps.rows.projectCode}}</tree-table-column>
            <tree-table-column label="备注" prop="mark">{{slotProps.rows.mark}}</tree-table-column>
        </tree-table>
    </div>
</template>

<script>

export default {
    name: 'home',
    data(){
        return {
            tableData:[
                {
                    id:1,
                    projectName: 'projectName1',
                    projectIndex: 'projectIndex1',
                    projectCode: 'projectCode1',
                    mark: 'mark1'
                },
                {
                    id:2,
                    projectName: 'projectName2',
                    projectIndex: 'projectIndex2',
                    projectCode: 'projectCode2',
                    mark: 'mark2'
                },
                {
                    id:3,
                    projectName: 'projectName3',
                    projectIndex: 'projectIndex3',
                    projectCode: 'projectCode3',
                    mark: 'mark3'
                },{
                    id:4,
                    projectName: 'projectName4',
                    projectIndex: 'projectIndex4',
                    projectCode: 'projectCode4',
                    mark: 'mark4'
                }
            ]
        }
    },
    components: {

    }
}
</script>
