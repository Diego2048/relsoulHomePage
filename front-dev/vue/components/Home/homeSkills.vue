<template>
   <div class="home-skills">
        <div class="container">
            <h1 class="text_underline">My Skills</h1>
            <div class="row">

                <!--
                for  生成
                -->
                <div class="col m6 s12" v-for="skill in skills">
                    <div class="skills-content">
                        <h2>{{skill.skill_name}}</h2>
                        <div class="col m10 s10">
                            <div class="progress">
                                <div class="determinate" :style="{width:skill.start_exp+'%'}"></div>
                            </div>
                        </div>
                        <div class="col m2 s2">
                            <span class="skills-value">
                                {{skill.start_exp+'%'}}
                            </span>
                        </div>
                    </div>
                </div>

            </div>

        </div>
   </div>
</template>
<style>

</style>
<script type="text/ecmascript-6">

    export default{
        data(){
            return{
                skills:[]
            }
        },
        ready(){
            let runnSkill=function (i) {
                return new Promise((resolve,reject)=>{
                    let timer=setInterval(()=>{
                        if(i.start_exp>=i.end_exp){
                            resolve(timer);
                            return false
                        }
                        i.start_exp++;
                    },60)
                })
            };

            $.promiseAjax("/home/skill").then((data)=>{
                this.skills=data.result;
                for(let i of this.skills){
                    runnSkill(i).then((timer)=>{
                        clearInterval(timer)
                    })
                }
            }).catch()

        },
        components:{

        }
    }
</script>