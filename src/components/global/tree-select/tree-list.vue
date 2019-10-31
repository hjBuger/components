<template>
	<ul class="tree-list">
		<li class="tree-list-li" v-for="item in treeData" :key="item[treeProp[value]]">
			<div
				@click="hasChildren(item) && toggleOpen(item)"
				class="tree-list-title"
				:class="setNodeClass(item)"
			>
				<template v-if="hasChildren(item)">
					<i class="el-icon-folder"></i>
					<i class="el-icon-folder-opened" v-show="isOpen(item)"></i>
					<span class="label-name">{{item[treeProp[label]]}}</span>
				</template>
				<template v-else>
					<el-checkbox v-model="selected" :value="item[treeProp[value]]">{{item[treeProp[label]]}}</el-checkbox>
				</template>

			</div>
			<template v-if="hasChildren(item)">
				<tree-list @tree-data="item.children" v-show="isOpen(item)" class="tree-list-child"></tree-list>
			</template>
		</li>
	</ul>
</template>

<script>
	import treeList from './tree-list.vue'
    export default {
        name: "tree-list",
		data(){
            return {
                selected:[],
				childOpenStatus:{}
			}
		},
		props:{
			treeData:{
			    type:Array,
				default() {
                    return [];
                }
            },
			value:{
			    type:Array,
				default() {
                    return [];
                }
            },
			treeProp:{
			    type:Object,
				default(){
			        return {
			            value: 'value',
						label: 'label'
					}
				}
			}
		},
		watch:{
            value:{
                deep:true,
				handler(ids){
                    this.selected = ids;
				}
			}
		},
		components:{
            treeList
		},
		methods:{
			hasChildren(item){
			    return item.children && item.children.length > 0;
			},
			setNodeClass(item){
			    return {
                    'first-node-hasChild': item.level === 1 && this.hasChildren(item),
					[`tree-node-${item.level}`]: true
				};
			},
			toggleOpen(item){
			    let status = !this.childOpenStatus[item[this.treeProp[value]]];
				this.$set(this.childOpenStatus, item[this.treeProp[value]], status);
			},
			isOpen(item){
			    return this.childOpenStatus[item[this.treeProp[value]]];
			}
		},
		created:{

		}
    }
</script>

<style scoped lang="less">
	.tree-list{
		padding:0 0 15px 0;
		margin: 0;
		list-style: none;
		.tree-list-child{
			padding:0;
		}
	}
	.tree-list-li{
		width: 100%;
		display: flex;
		flex-direction: column;
		line-height: 34px;
		font-size: 14px;

		.tree-list-title{
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			.label-name{
				display: block;
				font-size: inherit;
				color: inherit;
				font-weight: inherit;
			}

			&:hover,
			&.active{
				background: #1ce6ff;
				color: #fff;
			}
		}
		.first-node-hasChild{
			color: #ffb622;
		}

		.tree-node(@index) when (@index > 0){
			.tree-node(@index - 1);
			.tree-node-@{index}{
				padding:0 12px 0 12px*@index;
			}
		}
		.tree-node(12);
	}
</style>