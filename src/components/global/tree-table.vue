<template>
    <table
        class="tree-table"
        border="0"
        cellSpacing="0"
        cellPadding="10"
    >
        <thead>
            <tr>
                <th>项目编码</th>
                <th>项目名称</th>
                <th>项目指标</th>
                <th>备注</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1111</td>
                <td>2222</td>
                <td>3333</td>
                <td>4444</td>
            </tr>
            <tr>
                <td>1111</td>
                <td>2222</td>
                <td>3333</td>
                <td>4444</td>
            </tr>
            <tr>
                <td>1111</td>
                <td>2222</td>
                <td>3333</td>
                <td>4444</td>
            </tr>
            <tr>
                <td>1111</td>
                <td>2222</td>
                <td>3333</td>
                <td>4444</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: "tree-table"
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
