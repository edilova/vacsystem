<template>
    <div>
      <div class="row">
        <b-col cols="2" sm="4" md="2" class="mb-3 mb-xl-0 ">
          <b-button v-on:click="created('add')"  block variant="primary" class="mb-2" >Добавить работника</b-button>
        </b-col>
        <b-col cols="2" sm="4" md="2" class="ml-1 mb-3 mb-xl-0 ">
          <b-button v-on:click="created('notadd')"  block variant="primary" class="mb-2" >Список  работников</b-button>
        </b-col>


      </div>


      <div  v-show="addWorkerPage == 'notadd'">
        <b-col lg="12">
          <div  v-for="emp in listOfEmp.results">{{emp.id}}</div>
        </b-col>
      </div>

      <div  v-show="addWorkerPage == 'add'">
        <b-card>
          <b-form>
            <b-form-group

              description="ИИН Работника"
              label="ИИН Работника"
              label-for="basicName"
              :label-cols="3"
              :horizontal="true">
              <b-form-input v-model="IIN" id="basicName" type="text" autocomplete="name"></b-form-input>
            </b-form-group>



            <b-form-group
              description="пароль"
              label="Пароль"
              label-for="basicName"
              :label-cols="3"
              :horizontal="true">
              <b-form-input v-model="passw" id="basicName" type="text" autocomplete="name"></b-form-input>
            </b-form-group>

            <b-form-group
              description="Полное имя Работника"
              label="ФИО"
              label-for="basicName"
              :label-cols="3"
              :horizontal="true">
              <b-form-input v-model="fio" id="basicName" type="text" autocomplete="name"></b-form-input>
            </b-form-group>


            <div class="row">
              <div class="col-3">
                <p>Специальность</p>
              </div>

              <div class="col-9">
                <select class="w-100" v-model="selectedSpec" >
                  <option disabled value="">Please select one</option>
                  <option v-for="spec in specialities.results">{{spec.id}}</option>
                </select>
              </div>

            </div>

            <div class="row">
              <div class="col-3">
                <p>Отдел</p>
              </div>

              <div class="col-9">
                <select class="w-100"  v-model="selectedDep">
                  <option disabled value="">Please select one</option>
                  <option  v-for="todo in todos.results">{{todo.id}}
                  </option>
                </select>
              </div>

            </div>



            <b-form-group
              description="Номер телефона Работника"
              label="Номер телефона"
              label-for="basicName"
              :label-cols="3"
              :horizontal="true">
              <b-form-input  v-model="phone"  id="basicName" type="text" autocomplete="name"></b-form-input>
            </b-form-group>


          </b-form>


          IIN {{IIN}}<br>
          speciality {{selectedSpec}}
          dep {{selectedDep}}
          <div class="form-actions">
            <b-button v-on:click="createNew()" type="submit" variant="primary">Добавить работника</b-button>
          </div>
        </b-card>


      </div>

    </div>
</template>

<script>
  import { shuffleArray } from '@/shared/utils'
  import cTable from './Table.vue'
  const someData = () => shuffleArray([
    {ИИН: 12345678, ФИО: 'Edilova Aruzhan' , специальность: 'spec', отдел: 'depart', номер: '+7 707 123 34 45'},
  ])
    export default {
        name: "Workers",
      components: {cTable},
      data: () => {
        return {
          items: someData,
          itemsArray: someData(),
          message: "",
          todos: "",
          specialities:"",
          listOfEmp: "",
          // todos.name:
          todosname:"",
          options:['a','a'],
          selectedSpec: "",
          selectedDep: "",
          fields: [
            {key: 'ИИН', label: 'User', sortable: true},
            {key: 'ФИО'},
            {key: 'специальность'},
            {key: 'отдел', sortable: true},
            {key: 'номер'},
          ],
          addWorkerPage: 'notadd',
          IIN: "",
          passw: "",
          fio: "",
          spec:"",
          otdel:"",
          phone:""
        }
      },
      methods:{
        created($FullName) {
          this.addWorkerPage = $FullName

          console.log("CREATED CLICKED")
          this.$http.get('https://vaccinsystem.herokuapp.com/employee/Department/').then(function (data) {
            this.todos = data.body
            console.log("QWERTYUIOP{",data)
          })
          this.$http.get('https://vaccinsystem.herokuapp.com/employee/EmployeeType/').then(function (data) {
            this.specialities = data.body
            console.log("SPECIALITY",data)
          })

          this.$http.get('https://vaccinsystem.herokuapp.com/employee/Employee/').then(function (data) {
            this.listOfEmp = data.body
            console.log("listOfEmp",data)
          })

        },
        createNew(){
          console.log("in creat new fuction")
          const newWorker = {
            // IIN: this.IIN,
            // passw: this.passw,
            // fio: this.fio,
            // spec: this.spec,
            // otdel: this.otdel,
            // phone: this.phone

            // id: "'7",
            // employeeskey: "13",
            // name: "E A",
            // employeetype: "1",
            // department: "2",
            // phone: "1234567"
          }
          this.$http.post('https://vaccinsystem.herokuapp.com/employee/Employee/',{
            id: this.IIN,
            employeeskey: this.passw,
            name: this.fio,
            employeetype: this.selectedSpec,
            department: this.selectedDep,
            phone: this.phone
          }).then(function (data) {
            this.todos = data.body
            console.log("POST{",data)
          })
        }
      }
    }
</script>

<style scoped>
input{
  /*border-color: #e4ecf1;*/
  /*border-radius: 0.2rem;*/
  /*border-top-color: #dbe2e7;*/
  /*border-style: groove;*/
  /*height: 2.2rem;*/
}
</style>
