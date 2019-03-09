<template>


  <div class="wrapper">
    <div class="animated fadeIn">
      <div>

        <table id="basic-table2" style="display: none;">
          <thead>
          <tr>
            <th>ID</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Country</th>
            <th>IP-address</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td align="right">1</td>
            <td>Donna</td>
            <td>Moore</td>
            <td>dmoore0@furl.net</td>
            <td>China</td>
            <td>211.56.242.221</td>
          </tr>
          <tr>
            <td align="right">2</td>
            <td>Janice</td>
            <td>Henry</td>
            <td>jhenry1@theatlantic.com</td>
            <td>Ukraine</td>
            <td>38.36.7.199</td>
          </tr>
          <tr>
            <td align="right">3</td>
            <td>Ruth</td>
            <td>Wells</td>
            <td>rwells2@constantcontact.com</td>
            <td>Trinidad and Tobago</td>
            <td>19.162.133.184</td>
          </tr>
          <tr>
            <td align="right">4</td>
            <td>Jason</td>
            <td>Ray</td>
            <td>jray3@psu.edu</td>
            <td>Brazil</td>
            <td>10.68.11.42</td>
          </tr>
          <tr>
            <td align="right">5</td>
            <td>Jane</td>
            <td>Stephens</td>
            <td>jstephens4@go.com</td>
            <td>United States</td>
            <td>47.32.129.71</td>
          </tr>
          <tr>
            <td align="right">6</td>
            <td>Adam</td>
            <td>Nichols</td>
            <td>anichols5@com.com</td>
            <td>Canada</td>
            <td>18.186.38.37</td>
          </tr>
          </tbody>
        </table>

        <b-dropdown  id="ddown1" text="Выбрать отчет" class="m-2" v-show="isReport =='reportt'" >
          <b-dropdown-item v-on:click="reportId('report')">Общий отчет</b-dropdown-item>
          <!--<b-dropdown-item v-on:click="reportId('report0')">Отчет по датам</b-dropdown-item>-->
          <!--<b-dropdown-item v-on:click="reportId('report1')">Отчет 3</b-dropdown-item>-->
          <b-dropdown-item v-on:click="reportId('report2')">Отчет по датам</b-dropdown-item>
          <!--<b-dropdown-item v-on:click="reportId('report3')">Информация по количеству снятых животных у владельца </b-dropdown-item>-->
          <!--&lt;!&ndash;<b-dropdown-item v-on:click="reportId('report4')">Информация по количеству животных у владельцев</b-dropdown-item>&ndash;&gt;-->
          <!--<b-dropdown-item v-on:click="reportId('report5')">Информация по породам (масти) животных</b-dropdown-item>-->
          <!--<b-dropdown-item v-on:click="reportId('report6')">Информация по половозрастным группам животных</b-dropdown-item>-->
          <!--<b-dropdown-item v-on:click="reportId('report7')">Информация по зарегистрированным и снятым с учета животных</b-dropdown-item>-->
          <!--<b-dropdown-item v-on:click="reportId('report8')">Информация по прибывшим животным из других регионов</b-dropdown-item>-->
          <!--<b-dropdown-item v-on:click="reportId('report9')">Информация по снятым животным </b-dropdown-item>-->
          <!--<b-dropdown-item v-on:click="reportId('report10')">Отчет по ветеринарно-профилактическим мероприятиям</b-dropdown-item>-->
          <!--<b-dropdown-item v-on:click="reportId('report11')">Отчет по болезням с/х животных</b-dropdown-item>-->
          <!--<b-dropdown-item v-on:click="reportId('report12')">Отчет по исследованиям с/х животных</b-dropdown-item>-->
          <!--<b-dropdown-item v-on:click="reportId('report13')">Отчет по замененным ИНЖ</b-dropdown-item>-->
          <!--<b-dropdown-item v-on:click="reportId('report14')">Информация по зарегистрированным/выбывшим животным одного владельца (Учет откорма животных)</b-dropdown-item>-->

        </b-dropdown>
      </div>


      <div id="wrapper">
        <div v-show="isReport =='report'">

          <div  v-show="dataPage == 'notdata'">
            <b-card>
            <h5 class="text-center mb-3">Информация о владельце по ИИН или имени</h5>

            <b-form>
              <b-form-group
                      label="ИИН или имя владельца:"
                      label-for="basicName"
                      :label-cols="3"
                      :horizontal="true">
                <b-form-input id="basicName" type="text" autocomplete="name" v-model="filtername"></b-form-input>
              </b-form-group>

            </b-form>
            <div class="form-actions">
              <b-button type="submit" variant="primary" @click="repostRequest('data')">Сформировать</b-button>
            </div>
            </b-card>
          </div>
          <div  v-show="dataPage == 'data'">
            <b-card>
              <div v-for="nam in getFiltered">
                <p class="mt-1" style="color:#20a8d8; font-size: 1.5rem;">Данные о владельце {{nam.name}}</p>
              </div>

              <table id="basic-table" class="table">
                <thead>
                <tr>
                  <th scope="col">ИИН владельца</th>
                  <th scope="col">Имя владельца</th>
                  <th scope="col">Номер телефона</th>
                  <th scope="col">Почта</th>
                  <th scope="col">Адресс</th>
                  <th scope="col">Поселок</th>
                  <th scope="col">Кол-во скота</th>
                </tr>
                </thead>
                <tbody v-for="far in getFiltered">
                <tr>
                  <td v-model="id">{{far.id}}</td>
                  <td v-model="employee">{{far.name}}</td>
                  <td v-model="livestock">{{far.phone}}</td>
                  <td v-model="medicine">{{far.email}}</td>
                  <td v-model="bloodtest">{{far.address}}</td>
                  <td v-model="date">{{far.village}}</td>
                  <td v-model="date">{{far.livestocks.length}}</td>
                </tr>
                <!--<p class="mt-5" style="font-size: 1.5rem;"> Данные о животных владельца {{far.name}}</p>-->
                </tbody>
              </table>



              <div v-for="nam in getFiltered">
                <p class="mt-5" style="color:#20a8d8; font-size: 1.5rem;">Данные о животных владельца {{nam.name}}</p>
              </div>



              <table id="basic-table" class="table">
                <thead>
                <tr>
                  <th scope="col">Номер животного</th>
                  <th scope="col">Возраст</th>
                  <th scope="col">Место рождения</th>
                  <th scope="col">Тип животного</th>
                  <th scope="col">Пол животного</th>
                </tr>
                </thead>

                <tbody v-for="cv in getFiltered">
                <tr v-for="fil in cv.livestocks">
                  <td v-model="id">{{fil.id}}</td>
                  <td v-model="employee">{{fil.age}}</td>
                  <td v-model="livestock">{{fil.placeofbirth}}</td>
                  <td v-model="medicine">{{fil.typeoflivestock}}</td>
                  <td v-model="bloodtest">{{fil.sex}}</td>
                </tr>
                </tbody>
              </table>
              <!--<div class="form-actions">-->
              <!--<downloadexcel-->
              <!--class = "btn"-->
              <!--:data = "json_data"-->
              <!--:fields = "json_fields"-->

              <!--type    = "csv">-->

              <!--<b-button type="submit" variant="primary">Сформировать</b-button>-->
              <!--&lt;!&ndash;Download Excel&ndash;&gt;-->
              <!--</downloadexcel>-->


              <!--&lt;!&ndash;<b-button type="submit" variant="primary" @click="createPDF">createPDF</b-button>&ndash;&gt;-->
              <!--&lt;!&ndash;<button @click="generate">Generate PDF</button>&ndash;&gt;-->

              <!--</div>-->
            </b-card>
          </div>

        </div>
        <div v-show="isReport =='report0'">

          <div  v-show="dataPage1 == 'notdata1'">
            <b-card>
              <h5 class="text-center mb-3">Информация о вакцинации и дате животного </h5>

              <b-form>
                <b-form-group
                        label="ИИН или имя владельца:"
                        label-for="basicName"
                        :label-cols="3"
                        :horizontal="true">
                  <b-form-input id="basicName" type="text" autocomplete="name" v-model="filtername"></b-form-input>
                </b-form-group>

              </b-form>
              <div class="form-actions">
                <b-button type="submit" variant="primary" @click="repostRequest('data1')">Сформировать</b-button>
              </div>
            </b-card>
          </div>
          <div  v-show="dataPage == 'data1'">
            <b-card>
              <div v-for="nam in getFiltered">
                <p class="mt-1" style="color:#20a8d8; font-size: 1.5rem;">Данные о владельце {{nam.name}}</p>
              </div>

              <table  id="basic-table" class="table">
                <thead>
                <tr>
                  <th scope="col">ИИН владельца</th>
                  <th scope="col">Имя владельца</th>
                  <th scope="col">Номер телефона</th>
                  <th scope="col">Почта</th>
                  <th scope="col">Адресс</th>
                  <th scope="col">Поселок</th>
                  <th scope="col">Кол-во скота</th>
                </tr>
                </thead>
                <tbody v-for="far in getFiltered">
                <tr>
                  <td v-model="id">{{far.id}}</td>
                  <td v-model="employee">{{far.name}}</td>
                  <td v-model="livestock">{{far.phone}}</td>
                  <td v-model="medicine">{{far.email}}</td>
                  <td v-model="bloodtest">{{far.address}}</td>
                  <td v-model="date">{{far.village}}</td>
                  <td v-model="date">{{far.livestocks.length}}</td>
                </tr>
                <!--<p class="mt-5" style="font-size: 1.5rem;"> Данные о животных владельца {{far.name}}</p>-->
                </tbody>
              </table>



              <div v-for="nam in getFiltered">
                <p class="mt-5" style="color:#20a8d8; font-size: 1.5rem;">Данные о Вакцинации животных владельца {{nam.name}}</p>
              </div>



              <!--<table id="basic-table" class="table">-->
                <!--<thead>-->
                <!--<tr>-->
                  <!--<th scope="col">Номер животного</th>-->
                  <!--<th scope="col">Возраст</th>-->
                  <!--<th scope="col">Место рождения</th>-->
                  <!--<th scope="col">Тип животного</th>-->
                  <!--<th scope="col">Пол животного</th>-->
                <!--</tr>-->
                <!--</thead>-->

                <!--<tbody v-for="cv in getFiltered">-->
                <!--<tr v-for="fil in cv.livestocks">-->
                  <!--<td v-model="id">{{fil.id}}</td>-->
                  <!--<td v-model="employee">{{fil.age}}</td>-->
                  <!--<td v-model="livestock">{{fil.placeofbirth}}</td>-->
                  <!--<td v-model="medicine">{{fil.typeoflivestock}}</td>-->
                  <!--<td v-model="bloodtest">{{fil.sex}}</td>-->
                <!--</tr>-->
                <!--</tbody>-->
              <!--</table>-->

              <div v-for="fer in getFiltered">
                <table id="basic-table" class="table">
                  <thead>
                  <tr>
                    <th scope="col">Номер животного</th>
                    <th scope="col">Номер вакцинации</th>
                    <th scope="col">Вакцинатор</th>
                    <th scope="col">Дата вакцинации</th>
                    <th scope="col">Вакцина</th>
                  </tr>
                  </thead>

                  <tbody v-for="cv in fer.livestocks">
                  <tr v-for="fil in cv.vaccinations">
                    <td v-model="id">{{fer.id}}</td>
                    <td v-model="id">{{fil.id}}</td>
                    <td v-model="employee">{{fil.employee}}</td>
                    <td v-model="livestock">{{fil.date}}</td>
                    <td v-model="medicine">{{fil.medicine}}</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <!--<div class="form-actions">-->
              <!--<downloadexcel-->
              <!--class = "btn"-->
              <!--:data = "json_data"-->
              <!--:fields = "json_fields"-->

              <!--type    = "csv">-->

              <!--<b-button type="submit" variant="primary">Сформировать</b-button>-->
              <!--&lt;!&ndash;Download Excel&ndash;&gt;-->
              <!--</downloadexcel>-->


              <!--&lt;!&ndash;<b-button type="submit" variant="primary" @click="createPDF">createPDF</b-button>&ndash;&gt;-->
              <!--&lt;!&ndash;<button @click="generate">Generate PDF</button>&ndash;&gt;-->

              <!--</div>-->
            </b-card>
          </div>

        </div>
        <div v-show="isReport =='report1'">
          <div  v-show="dataPage2 == 'notdata2'">
            <b-card>
              <h5 class="text-center mb-3">Информация о вакцинации и дате животного gfewfew</h5>

              <b-form>
                <b-form-group
                        label="ИИН или имя владельца:"
                        label-for="basicName"
                        :label-cols="3"
                        :horizontal="true">
                  <b-form-input id="basicName" type="text" autocomplete="name" v-model="filtername"></b-form-input>
                </b-form-group>

              </b-form>
              <div class="form-actions">
                <b-button type="submit" variant="primary" @click="repostRequest('data2')">Сформировать</b-button>
              </div>
            </b-card>
          </div>
          <div  v-show="dataPage == 'data2'">
            <b-card>
              <!--<div v-for="nam in getFiltered2">-->
                <!--<p class="mt-1" style="color:#20a8d8; font-size: 1.5rem;">Данные о владельце rwgwwwwww</p>-->
              <!--</div>-->


              <!--<div>-->
                <!--<table id="basic-table" class="table">-->
                  <!--<thead>-->
                  <!--<tr v-for="fer in getFiltered2">-->
                    <!--<th scope="col"></th>-->
                    <!--<th scope="col">{{fer.medicine}}</th>-->
                  <!--</tr>-->
                  <!--</thead>-->

                  <!--<tbody v-for="cv in fer.livestocks">-->
                  <!--<tr v-for="fil in cv.vaccinations">-->
                  <!--</tr>-->
                  <!--</tbody>-->
                <!--</table>-->
              <!--</div>-->



              <div v-for="nam in getFiltered">
                <p class="mt-5" style="color:#20a8d8; font-size: 1.5rem;">Данные о Вакцинации животных владельца {{nam.name}}</p>
              </div>


              <div v-for="fer in getFiltered" style="overflow: scroll">
                <table id="basic-table" class="table">
                  <thead v-for="cv in fer.livestocks">
                    <tr >
                      <th scope="col">Животное</th>
                      <th scope="col" v-for="cvv in cv.vaccinations">{{cvv.medicine}}</th>
                    </tr>
                  </thead>
                  <tbody v-for="cv in fer.livestocks">
                    <tr>
                      <td scope="col" >{{fer.id}}</td>
                      <td scope="col" v-for="cvv in cv.vaccinations">{{cvv.date}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </b-card>
          </div>
        </div>
        <div v-show="isReport =='report2'">
          <div  v-show="dataPage3 == 'notdata3'">
            <b-card>
              <h5 class="text-center mb-3">Информация о вакцинации и дате животного 3</h5>

              <b-form>
                <b-form-group
                        label="ИИН или имя владельца:"
                        label-for="basicName"
                        :label-cols="3"
                        :horizontal="true">
                  <b-form-input id="basicName" type="text" autocomplete="name" v-model="filtername2"></b-form-input>
                </b-form-group>

                <b-form-group
                        label="Начало" label-for="date"
                        :label-cols="3"
                        :horizontal="true">
                  <b-form-input type="date" id="date" v-model="startdate"></b-form-input>
                </b-form-group>


                <b-form-group
                        label="Конец" label-for="date"
                        :label-cols="3"
                        :horizontal="true">
                  <b-form-input type="date" id="date" v-model="enddate"></b-form-input>
                </b-form-group>


              </b-form>
              <div class="form-actions">
                <b-button type="submit" variant="primary" @click="repostRequest2('data3')">Сформировать</b-button>
              </div>
            </b-card>
          </div>
          <div  v-show="dataPage == 'data3'">
            <b-card>
              <!--<div v-for="nam in getFiltered2">-->
              <!--<p class="mt-1" style="color:#20a8d8; font-size: 1.5rem;">Данные о владельце rwgwwwwww</p>-->
              <!--</div>-->


              <!--<div>-->
              <!--<table id="basic-table" class="table">-->
              <!--<thead>-->
              <!--<tr v-for="fer in getFiltered2">-->
              <!--<th scope="col"></th>-->
              <!--<th scope="col">{{fer.medicine}}</th>-->
              <!--</tr>-->
              <!--</thead>-->

              <!--<tbody v-for="cv in fer.livestocks">-->
              <!--<tr v-for="fil in cv.vaccinations">-->
              <!--</tr>-->
              <!--</tbody>-->
              <!--</table>-->
              <!--</div>-->



              <!--<div v-for="nam in getFiltered">-->
                <!--<p class="mt-5" style="color:#20a8d8; font-size: 1.5rem;">Otchet 3</p>-->
              <!--</div>-->


              <div style="overflow: scroll">
                <table id="basic-table" class="table">
                  <thead>
                  <!--<tr v-for="med in fer.medicine">-->
                    <th scope="col">Животное</th>
                    <!--<th scope="col">{{fer.id}}</th>-->
                    <th scope="col" v-for="ferr in getFiltered2">{{ferr.medicine.name}}</th>
                    <!--<th scope="col" v-for="ferr in getFiltered2">{{ferr.id}}</th>-->
                  <!--</tr>-->
                  </thead>
                  <tbody>
                  <tr v-for="fer in getFiltered2">
                    <td scope="col">{{fer.livestock.id}} </td>
                    <td scope="col" v-for="fer in getFiltered2">{{fer.date}} </td>
                    <!--<td scope="col">erv</td>-->
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="pagination d-flex flex-row justify-content-between w-100">
                <b-col cols="2" sm="4" md="2" class="mb-3 mb-xl-0 ">
                  <b-button block variant="primary" class="mb-2" @click="pagebtnPrevious">Пред</b-button>
                </b-col>
                <b-col cols="2" sm="4" md="2" class="mb-3 mb-xl-0 ">
                  <b-button block variant="primary" class="mb-2" @click="pagebtnNext">След</b-button>
                </b-col>
                <!--<b-button block variant="primary"  class="text-left" @click="pagebtnPrevious">Пред</b-button>-->
                <!--&lt;!&ndash;<p class="m-0 text-center">{{pageid}}</p>&ndash;&gt;-->
                <!--<b-button block variant="primary"  class="text-right" @click="pagebtnNext">След</b-button>-->
              </div>
            </b-card>
          </div>
        </div>
        <div v-show="isReport =='report3'">
          <b-card>
            <h5 class="text-center mb-3">Информация по количеству снятых животных у владельца</h5>
            <b-form>
              <b-form-group
                description="Let us know your full name."
                label="Владелец"
                label-for="basicName"
                :label-cols="3"
                :horizontal="true">
                <b-form-input id="basicName" type="text" autocomplete="name"></b-form-input>
              </b-form-group>


              <b-form-group
                label="Вид животного"
                label-for="basicSelect"
                :label-cols="3"
                :horizontal="true">
                <b-form-select id="basicSelect"
                               :plain="true"
                               :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                               value="Please select">
                </b-form-select>
              </b-form-group>

              <b-form-group
                label="Дата"
                label-for="basicInlineRadios"
                :label-cols="3"
                :horizontal="true">
                <b-form-radio-group id="basicInlineRadios"
                                    :plain="true"
                                    :options="[
                {text: 'На дату',value: '1'},
                {text: 'Период',value: '2'}
              ]"
                                    :checked="3">
                </b-form-radio-group>
              </b-form-group>



              <b-form-group
                label="" label-for="date"
                :label-cols="3"
                :horizontal="true">
                <b-form-input type="date" id="date"></b-form-input>
              </b-form-group>



              <b-form-group
                label="По области"
                label-for="basicSelect"
                :label-cols="3"
                :horizontal="true">
                <b-form-select id="basicSelect"
                               :plain="true"
                               :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                               value="Please select">
                </b-form-select>
              </b-form-group>


            </b-form>
            <div class="form-actions">
              <b-button type="submit" variant="primary">Сформировать</b-button>
            </div>
          </b-card>
        </div>
        <div v-show="isReport =='report5'" >
          <b-card>
            <h5 class="text-center mb-3">Информация по породам (масти) животны</h5>

            <b-form>
              <b-form-group
                label="Дата"
                label-for="basicInlineRadios"
                :label-cols="3"
                :horizontal="true">
                <b-form-radio-group id="basicInlineRadios"
                                    :plain="true"
                                    :options="[
                {text: 'На дату',value: '1'},
                {text: 'Период',value: '2'}
              ]"
                                    :checked="3">
                </b-form-radio-group>
              </b-form-group>



              <b-form-group
                label="" label-for="date"
                :label-cols="3"
                :horizontal="true">
                <b-form-input type="date" id="date"></b-form-input>
              </b-form-group>

              <b-form-group
                label="По области"
                label-for="basicSelect"
                :label-cols="3"
                :horizontal="true">
                <b-form-select id="basicSelect"
                               :plain="true"
                               :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                               value="Please select">
                </b-form-select>
              </b-form-group>


            </b-form>
            <div class="form-actions">
              <b-button type="submit" variant="primary">Сформировать</b-button>
            </div>
          </b-card>
        </div>
        <div v-show="isReport =='report6'">
          <b-card>
            <h5 class="text-center mb-3">Информация по половозрастным группам животных</h5>

            <b-form>
              <b-form-group
                label="Дата"
                label-for="basicInlineRadios"
                :label-cols="3"
                :horizontal="true">
                <b-form-radio-group id="basicInlineRadios"
                                    :plain="true"
                                    :options="[
                {text: 'На дату',value: '1'},
                {text: 'Период',value: '2'}
              ]"
                                    :checked="3">
                </b-form-radio-group>
              </b-form-group>



              <b-form-group
                label="" label-for="date"
                :label-cols="3"
                :horizontal="true">
                <b-form-input type="date" id="date"></b-form-input>
              </b-form-group>


              <b-form-group
                label="По области"
                label-for="basicSelect"
                :label-cols="3"
                :horizontal="true">
                <b-form-select id="basicSelect"
                               :plain="true"
                               :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                               value="Please select">
                </b-form-select>
              </b-form-group>
            </b-form>
            <div class="form-actions">
              <b-button type="submit" variant="primary">Сформировать</b-button>
            </div>
          </b-card>
        </div>
        <div v-show="isReport =='report7'">
          <b-card>
            <h5 class="text-center mb-3">Информация по зарегистрированным и снятым с учета животных</h5>
            <b-form>

              <b-form-group
                label="Вид животного"
                label-for="basicSelect"
                :label-cols="3"
                :horizontal="true">
                <b-form-select id="basicSelect"
                               :plain="true"
                               :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                               value="Please select">
                </b-form-select>
              </b-form-group>

              <b-form-group
                label="Дата"
                label-for="basicInlineRadios"
                :label-cols="3"
                :horizontal="true">
                <b-form-radio-group id="basicInlineRadios"
                                    :plain="true"
                                    :options="[
                {text: 'На дату',value: '1'},
                {text: 'Период',value: '2'}
              ]"
                                    :checked="3">
                </b-form-radio-group>
              </b-form-group>



              <b-form-group
                label="" label-for="date"
                :label-cols="3"
                :horizontal="true">
                <b-form-input type="date" id="date"></b-form-input>
              </b-form-group>



              <b-form-group
                label="По области"
                label-for="basicSelect"
                :label-cols="3"
                :horizontal="true">
                <b-form-select id="basicSelect"
                               :plain="true"
                               :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                               value="Please select">
                </b-form-select>
              </b-form-group>


            </b-form>
            <div class="form-actions">
              <b-button type="submit" variant="primary">Сформировать</b-button>
            </div>
          </b-card>
        </div>
        <div v-show="isReport =='report8'">
          <b-card>
            <h5 class="text-center mb-3">Информация по прибывшим животным из других регионов</h5>
            <b-form>

              <b-form-group
                label="Вид животного"
                label-for="basicSelect"
                :label-cols="3"
                :horizontal="true">
                <b-form-select id="basicSelect"
                               :plain="true"
                               :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                               value="Please select">
                </b-form-select>
              </b-form-group>

              <b-form-group
                label="Дата"
                label-for="basicInlineRadios"
                :label-cols="3"
                :horizontal="true">
                <b-form-radio-group id="basicInlineRadios"
                                    :plain="true"
                                    :options="[
                {text: 'На дату',value: '1'},
                {text: 'Период',value: '2'}
              ]"
                                    :checked="3">
                </b-form-radio-group>
              </b-form-group>



              <b-form-group
                label="" label-for="date"
                :label-cols="3"
                :horizontal="true">
                <b-form-input type="date" id="date"></b-form-input>
              </b-form-group>



              <b-form-group
                label="По области"
                label-for="basicSelect"
                :label-cols="3"
                :horizontal="true">
                <b-form-select id="basicSelect"
                               :plain="true"
                               :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                               value="Please select">
                </b-form-select>
              </b-form-group>


            </b-form>
            <div class="form-actions">
              <b-button type="submit" variant="primary">Сформировать</b-button>
            </div>
          </b-card>
        </div>
        <div v-show="isReport =='report9'">
          <b-card>
            <h5 class="text-center mb-3">Информация по снятым животным </h5>
            <b-form>

              <b-form-group
                label="Вид животного"
                label-for="basicSelect"
                :label-cols="3"
                :horizontal="true">
                <b-form-select id="basicSelect"
                               :plain="true"
                               :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                               value="Please select">
                </b-form-select>
              </b-form-group>

              <b-form-group
                label="Дата"
                label-for="basicInlineRadios"
                :label-cols="3"
                :horizontal="true">
                <b-form-radio-group id="basicInlineRadios"
                                    :plain="true"
                                    :options="[
                {text: 'На дату',value: '1'},
                {text: 'Период',value: '2'}
              ]"
                                    :checked="3">
                </b-form-radio-group>
              </b-form-group>



              <b-form-group
                label="" label-for="date"
                :label-cols="3"
                :horizontal="true">
                <b-form-input type="date" id="date"></b-form-input>
              </b-form-group>



              <b-form-group
                label="По области"
                label-for="basicSelect"
                :label-cols="3"
                :horizontal="true">
                <b-form-select id="basicSelect"
                               :plain="true"
                               :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                               value="Please select">
                </b-form-select>
              </b-form-group>


            </b-form>
            <div class="form-actions">
              <b-button type="submit" variant="primary">Сформировать</b-button>
            </div>
          </b-card>
        </div>
        <div v-show="isReport =='report10'">
          <b-card>
            <h5 class="text-center mb-3">Отчет по ветеринарно-профилактическим мероприятиям</h5>
            <b-form>

              <b-form-group
                label="Вид животного"
                label-for="basicSelect"
                :label-cols="3"
                :horizontal="true">
                <b-form-select id="basicSelect"
                               :plain="true"
                               :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                               value="Please select">
                </b-form-select>
              </b-form-group>

              <b-form-group
                label="Дата"
                label-for="basicInlineRadios"
                :label-cols="3"
                :horizontal="true">
                <b-form-radio-group id="basicInlineRadios"
                                    :plain="true"
                                    :options="[
                {text: 'На дату',value: '1'},
                {text: 'Период',value: '2'}
              ]"
                                    :checked="3">
                </b-form-radio-group>
              </b-form-group>



              <b-form-group
                label="" label-for="date"
                :label-cols="3"
                :horizontal="true">
                <b-form-input type="date" id="date"></b-form-input>
              </b-form-group>



              <b-form-group
                label="По области"
                label-for="basicSelect"
                :label-cols="3"
                :horizontal="true">
                <b-form-select id="basicSelect"
                               :plain="true"
                               :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                               value="Please select">
                </b-form-select>
              </b-form-group>


            </b-form>
            <div class="form-actions">
              <downloadexcel
                class = "btn"
                :data = "json_data"
                :fields = "json_fields"

                type    = "csv">

                <b-button type="submit" variant="primary">Сформировать</b-button>
                <!--Download Excel-->
              </downloadexcel>


            </div>
          </b-card>
        </div>
        <div v-show="isReport =='report11'">
          <b-card>
            <h5 class="text-center mb-3">Отчет по болезням с/х животных</h5>
            <b-form>

              <b-form-group
                label="Вид животного"
                label-for="basicSelect"
                :label-cols="3"
                :horizontal="true">
                <b-form-select id="basicSelect"
                               :plain="true"
                               :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                               value="Please select">
                </b-form-select>
              </b-form-group>

              <b-form-group
                label="Дата"
                label-for="basicInlineRadios"
                :label-cols="3"
                :horizontal="true">
                <b-form-radio-group id="basicInlineRadios"
                                    :plain="true"
                                    :options="[
                {text: 'На дату',value: '1'},
                {text: 'Период',value: '2'}
              ]"
                                    :checked="3">
                </b-form-radio-group>
              </b-form-group>



              <b-form-group
                label="" label-for="date"
                :label-cols="3"
                :horizontal="true">
                <b-form-input type="date" id="date"></b-form-input>
              </b-form-group>



              <b-form-group
                label="По области"
                label-for="basicSelect"
                :label-cols="3"
                :horizontal="true">
                <b-form-select id="basicSelect"
                               :plain="true"
                               :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                               value="Please select">
                </b-form-select>
              </b-form-group>


            </b-form>
            <div class="form-actions">
              <b-button type="submit" variant="primary">Сформировать</b-button>
            </div>
          </b-card>
        </div>
        <div v-show="isReport =='report12'">
          <b-card>
            <h5 class="text-center mb-3">Отчет по исследованиям с/х животных</h5>
            <b-form>

              <b-form-group
                label="Вид животного"
                label-for="basicSelect"
                :label-cols="3"
                :horizontal="true">
                <b-form-select id="basicSelect"
                               :plain="true"
                               :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                               value="Please select">
                </b-form-select>
              </b-form-group>

              <b-form-group
                label="Дата"
                label-for="basicInlineRadios"
                :label-cols="3"
                :horizontal="true">
                <b-form-radio-group id="basicInlineRadios"
                                    :plain="true"
                                    :options="[
                {text: 'На дату',value: '1'},
                {text: 'Период',value: '2'}
              ]"
                                    :checked="3">
                </b-form-radio-group>
              </b-form-group>



              <b-form-group
                label="" label-for="date"
                :label-cols="3"
                :horizontal="true">
                <b-form-input type="date" id="date"></b-form-input>
              </b-form-group>



              <b-form-group
                label="По области"
                label-for="basicSelect"
                :label-cols="3"
                :horizontal="true">
                <b-form-select id="basicSelect"
                               :plain="true"
                               :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                               value="Please select">
                </b-form-select>
              </b-form-group>


            </b-form>
            <div class="form-actions">
              <b-button type="submit" variant="primary">Сформировать</b-button>
            </div>
          </b-card>
        </div>
        <div v-show="isReport =='report13'">
          <b-card>
            <h5 class="text-center mb-3">Отчет по замененным ИНЖ</h5>
            <b-form>

              <b-form-group
                label="Вид животного"
                label-for="basicSelect"
                :label-cols="3"
                :horizontal="true">
                <b-form-select id="basicSelect"
                               :plain="true"
                               :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                               value="Please select">
                </b-form-select>
              </b-form-group>

              <b-form-group
                label="Дата"
                label-for="basicInlineRadios"
                :label-cols="3"
                :horizontal="true">
                <b-form-radio-group id="basicInlineRadios"
                                    :plain="true"
                                    :options="[
                {text: 'На дату',value: '1'},
                {text: 'Период',value: '2'}
              ]"
                                    :checked="3">
                </b-form-radio-group>
              </b-form-group>



              <b-form-group
                label="" label-for="date"
                :label-cols="3"
                :horizontal="true">
                <b-form-input type="date" id="date"></b-form-input>
              </b-form-group>



              <b-form-group
                label="По области"
                label-for="basicSelect"
                :label-cols="3"
                :horizontal="true">
                <b-form-select id="basicSelect"
                               :plain="true"
                               :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                               value="Please select">
                </b-form-select>
              </b-form-group>


            </b-form>
            <div class="form-actions">
              <b-button type="submit" variant="primary">Сформировать</b-button>
            </div>
          </b-card>
        </div>
        <div v-show="isReport =='report14'">
          <b-card>
            <h5 class="text-center mb-3">Информация по зарегистрированным/выбывшим животным одного владельца (Учет откорма животных)</h5>
            <b-form>
              <b-form-group
                description="Let us know your full name."
                label="Владелец"
                label-for="basicName"
                :label-cols="3"
                :horizontal="true">
                <b-form-input id="basicName" type="text" autocomplete="name"></b-form-input>
              </b-form-group>


              <b-form-group
                label="Вид животного"
                label-for="basicSelect"
                :label-cols="3"
                :horizontal="true">
                <b-form-select id="basicSelect"
                               :plain="true"
                               :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                               value="Please select">
                </b-form-select>
              </b-form-group>

              <b-form-group
                label="Дата"
                label-for="basicInlineRadios"
                :label-cols="3"
                :horizontal="true">
                <b-form-radio-group id="basicInlineRadios"
                                    :plain="true"
                                    :options="[
                {text: 'На дату',value: '1'},
                {text: 'Период',value: '2'}
              ]"
                                    :checked="3">
                </b-form-radio-group>
              </b-form-group>



              <b-form-group
                label="" label-for="date"
                :label-cols="3"
                :horizontal="true">
                <b-form-input type="date" id="date"></b-form-input>
              </b-form-group>



              <b-form-group
                label="По области"
                label-for="basicSelect"
                :label-cols="3"
                :horizontal="true">
                <b-form-select id="basicSelect"
                               :plain="true"
                               :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                               value="Please select">
                </b-form-select>
              </b-form-group>


            </b-form>
            <div class="form-actions">
              <b-button type="submit" variant="primary">Сформировать</b-button>
            </div>
          </b-card>
        </div>

      </div>



    </div>

  </div>

</template>

<script>

  import downloadexcel from "vue-json-excel";
  import axios from 'axios';
  import { shuffleArray } from '@/shared/utils'
  import cTable from './base/Table.vue'
  import jsPDF from 'jspdf'

  const someData = () => shuffleArray([
    {id: '12345678', vac1: '2012/01/01', vac2: '2012/01/01', vac3: '2012/01/01', vac4: '2012/01/01', vac5: '2012/01/01', vac6: '2012/01/01', vac7: '2012/01/01', vac8: '2012/01/01', vac9: '2012/01/01',},
    {id: '12345678', vac1: '2012/01/01', vac2: '2012/01/01', vac3: '2012/01/01', vac4: '2012/01/01', vac5: '2012/01/01', vac6: '2012/01/01', vac7: '2012/01/01', vac8: '2012/01/01', vac9: '2012/01/01',},
    {id: '12345678', vac1: '2012/01/01', vac2: '2012/01/01', vac3: '2012/01/01', vac4: '2012/01/01', vac5: '2012/01/01', vac6: '2012/01/01', vac7: '2012/01/01', vac8: '2012/01/01', vac9: '2012/01/01',},
    {id: '12345678', vac1: '2012/01/01', vac2: '2012/01/01', vac3: '2012/01/01', vac4: '2012/01/01', vac5: '2012/01/01', vac6: '2012/01/01', vac7: '2012/01/01', vac8: '2012/01/01', vac9: '2012/01/01',},
    {id: '12345678', vac1: '2012/01/01', vac2: '2012/01/01', vac3: '2012/01/01', vac4: '2012/01/01', vac5: '2012/01/01', vac6: '2012/01/01', vac7: '2012/01/01', vac8: '2012/01/01', vac9: '2012/01/01',},
    {id: '12345678', vac1: '2012/01/01', vac2: '2012/01/01', vac3: '2012/01/01', vac4: '2012/01/01', vac5: '2012/01/01', vac6: '2012/01/01', vac7: '2012/01/01', vac8: '2012/01/01', vac9: '2012/01/01',},
    {id: '12345678', vac1: '2012/01/01', vac2: '2012/01/01', vac3: '2012/01/01', vac4: '2012/01/01', vac5: '2012/01/01', vac6: '2012/01/01', vac7: '2012/01/01', vac8: '2012/01/01', vac9: '2012/01/01',},
    {id: '12345678', vac1: '2012/01/01', vac2: '2012/01/01', vac3: '2012/01/01', vac4: '2012/01/01', vac5: '2012/01/01', vac6: '2012/01/01', vac7: '2012/01/01', vac8: '2012/01/01', vac9: '2012/01/01',},
    {id: '12345678', vac1: '2012/01/01', vac2: '2012/01/01', vac3: '2012/01/01', vac4: '2012/01/01', vac5: '2012/01/01', vac6: '2012/01/01', vac7: '2012/01/01', vac8: '2012/01/01', vac9: '2012/01/01',},
    {id: '12345678', vac1: '2012/01/01', vac2: '2012/01/01', vac3: '2012/01/01', vac4: '2012/01/01', vac5: '2012/01/01', vac6: '2012/01/01', vac7: '2012/01/01', vac8: '2012/01/01', vac9: '2012/01/01',},
    {id: '12345678', vac1: '2012/01/01', vac2: '2012/01/01', vac3: '2012/01/01', vac4: '2012/01/01', vac5: '2012/01/01', vac6: '2012/01/01', vac7: '2012/01/01', vac8: '2012/01/01', vac9: '2012/01/01',},
    {id: '12345678', vac1: '2012/01/01', vac2: '2012/01/01', vac3: '2012/01/01', vac4: '2012/01/01', vac5: '2012/01/01', vac6: '2012/01/01', vac7: '2012/01/01', vac8: '2012/01/01', vac9: '2012/01/01',},
    {id: '12345678', vac1: '2012/01/01', vac2: '2012/01/01', vac3: '2012/01/01', vac4: '2012/01/01', vac5: '2012/01/01', vac6: '2012/01/01', vac7: '2012/01/01', vac8: '2012/01/01', vac9: '2012/01/01',},
    {id: '12345678', vac1: '2012/01/01', vac2: '2012/01/01', vac3: '2012/01/01', vac4: '2012/01/01', vac5: '2012/01/01', vac6: '2012/01/01', vac7: '2012/01/01', vac8: '2012/01/01', vac9: '2012/01/01',},
    {id: '12345678', vac1: '2012/01/01', vac2: '2012/01/01', vac3: '2012/01/01', vac4: '2012/01/01', vac5: '2012/01/01', vac6: '2012/01/01', vac7: '2012/01/01', vac8: '2012/01/01', vac9: '2012/01/01',},
    {id: '12345678', vac1: '2012/01/01', vac2: '2012/01/01', vac3: '2012/01/01', vac4: '2012/01/01', vac5: '2012/01/01', vac6: '2012/01/01', vac7: '2012/01/01', vac8: '2012/01/01', vac9: '2012/01/01',},
    {id: '12345678', vac1: '2012/01/01', vac2: '2012/01/01', vac3: '2012/01/01', vac4: '2012/01/01', vac5: '2012/01/01', vac6: '2012/01/01', vac7: '2012/01/01', vac8: '2012/01/01', vac9: '2012/01/01',},
    {id: '12345678', vac1: '2012/01/01', vac2: '2012/01/01', vac3: '2012/01/01', vac4: '2012/01/01', vac5: '2012/01/01', vac6: '2012/01/01', vac7: '2012/01/01', vac8: '2012/01/01', vac9: '2012/01/01',},
    {id: '12345678', vac1: '2012/01/01', vac2: '2012/01/01', vac3: '2012/01/01', vac4: '2012/01/01', vac5: '2012/01/01', vac6: '2012/01/01', vac7: '2012/01/01', vac8: '2012/01/01', vac9: '2012/01/01',},
    {id: '12345678', vac1: '2012/01/01', vac2: '2012/01/01', vac3: '2012/01/01', vac4: '2012/01/01', vac5: '2012/01/01', vac6: '2012/01/01', vac7: '2012/01/01', vac8: '2012/01/01', vac9: '2012/01/01',},

  ])

  function generate() {

      var doc = new jsPDF('p', 'pt');

      var res = doc.autoTableHtmlToJson(document.getElementById("basic-table"));
      doc.autoTable(res.columns, res.data, {margin: {top: 80}});

      var header = function(data) {
          doc.setFontSize(18);
          doc.setTextColor(40);
          doc.setFontStyle('normal');
          //doc.addImage(headerImgData, 'JPEG', data.settings.margin.left, 20, 50, 50);
          doc.text("Testing Report", data.settings.margin.left, 50);
      };

      var options = {
          beforePageContent: header,
          margin: {
              top: 80
          },
          startY: doc.autoTableEndPosY() + 20
      };

      doc.autoTable(res.columns, res.data, options);

      doc.save("table.pdf");
  }

  export default {
    name: 'c-table',

    inheritAttrs: false,
    props: {
      caption: {
        type: String,
        default: 'Table'
      },
      hover: {
        type: Boolean,
        default: true
      },
      striped: {
        type: Boolean,
        default: false
      },
      bordered: {
        type: Boolean,
        default: false
      },
      small: {
        type: Boolean,
        default: false
      },
      fixed: {
        type: Boolean,
        default: false
      },
      tableData: {
        type: [Array, Function],
        default: () => []
      },
      fields: {
        type: [Array, Object],
        default: () => []
      },
      perPage: {
        type: Number,
        default: 10
      },
      dark: {
        type: Boolean,
        default: false
      }
    },
    data: () => {
      return {
        currentPage: 1,
      }
    },
    computed: {
      items: function() {
        const items =  this.tableData
        return Array.isArray(items) ? items : items()
      },
      totalRows: function () { return this.getRowCount() },
      captions: function() { return this.fields }
    },

    name: "reports",
    components: {
      cTable,
      downloadexcel
    },

    data () {
        return {
          // seen: truee,
          // type: 'A',
          todos: [],
            id:"",
            employee: "",
            livestock: "",
            medicine:"",
            bloodtest:"",
            date: "",
          isReport: 'reportt',
          selected: null,
            oblast: 'Алматинская Область',
            getVAC: "",
            filtername:"",
            filtername2:"",
            getFiltered:"",
            getFiltered2:"",
            filterid:"",
            dataPage:"notdata",
            dataPage1: "notdata1",
            dataPage2: "notdata2",
            dataPage3: "notdata3",
            linkPrev:"",
            linkNext:"",
            startdate:"",
            enddate:"",
          options: [
            { value: null, text: 'Please select an option' },
            { value: 'Australia', text: 'Australia' },
            { value: 'China', text: 'China' },
            { value: 'America', text: 'America' },
            { value: 'Russia', text: 'Russia'}
          ],

          Names: [
            {
              Name: "report1",
              FullName: "report1"
            },
            {
              Name: "report2",
              FullName: 'report2'
            },
            {
              Name: "report3",
              FullName: "report3"
            },
            {
              Name: "report4",
              FullName: "report4"
            }
            ],
          items: someData,
          itemsArray: someData(),
          fields: [
            {key: 'id', label: 'User', sortable: true},
            {key: 'vac1'},
            {key: 'vac2'},
            {key: 'vac3'},
            {key: 'vac4'},
            {key: 'vac5'},
            {key: 'vac6'},
            {key: 'vac7'},
            {key: 'vac8'},
            {key: 'vac9'},

          ],
          json_fields: {
            'Номер вакцинации': 'vaccinationid',
            'Вакцинатор': 'vaccinator',
            'Номер скота': 'livestockid',
            'Тест крови': 'bloodtest',
            'Дата': 'date',
          },
          json_data: [
            {
              'vaccinationid': "123",
              'vaccinator': "3454",
              'livestockid': "КРС",
              'bloodtest': "363",
              'date': "2018-12-09",

            },
              {
                  'vaccinationid': "43",
                  'vaccinator': "3454",
                  'livestockid': "МРС",
                  'bloodtest': "5663",
                  'date': "2018-12-09",

              },
              {
                  'vaccinationid': "24",
                  'vaccinator': "3454",
                  'livestockid': "КРС",
                  'bloodtest': "36",
                  'date': "2018-12-09",

              },
              {
                  'vaccinationid': "22",
                  'vaccinator': "3454",
                  'livestockid': "МРС",
                  'bloodtest': "87",
                  'date': "2018-12-09",

              },
              {
                  'vaccinationid': "546",
                  'vaccinator': "3454",
                  'livestockid': "КРС",
                  'bloodtest': "3632",
                  'date': "2018-12-09",

              },

          //   {
          //     'oblast': 'Алматинская Область',
          //     'raion': 'Аксуский',
          //     'seok': 'Жансугуров',
          //     'owner': 'Имя Фамилия',
          //     'vidimm': 'Вид иммунизации',
          //     'sick': 'Болезнь',
          //     'numoflivestock': '456',
          //     'itogo': '123456',
          //
          //   }
          ],
          json_meta: [
            [
              {
                'key': 'charset',
                'value': 'utf-8'
              }
            ]
          ],
        }
      },

      created: function () {
          this.fetchData();
      },
      methods: {
          fetchData: function () {
              return new Promise((resolve, reject) => {
                  // commit('auth_request')
                  console.log('promise example ');
                  const token = sessionStorage.getItem('token');
                  axios.defaults.headers.common['Authorization'] = "Token " + token
                  console.log(axios.defaults.headers, 'headers in get');

                  //get Department
                  // axios({url: 'http://185.22.65.39:7000//vaccination/Vaccination/', method: 'GET' })

                  // axios({url: 'http://185.22.65.39:7000//farmer/Farmer/', method: 'GET' })
                  //
                  //     .then(resp => {
                  //         console.log('getVAC',resp.data)
                  //         this.getVAC = resp.data.results
                  //         resolve(resp)
                  //
                  //
                  //     })
                  //     .catch(err => {console.log(err)
                  //     })
                  //



                  //get Department
                  axios({url: 'http://185.22.65.39:7000/vaccination/TableVaccination/?name='+'&id='+'&start_date='+'12.02.2019'+'&end_date='+'18.02.2019' , method: 'GET' })

                      .then(resp => {
                          // console.log('getFarmer',resp.data)
                          this.getFarmer = resp.data.results
                          this.linkPrev = resp.data.links.previous
                          this.linkNext = resp.data.links.next
                          this.getFarmerLength = resp.data.count % 100
                          // console.log('LENGTHHHHH', resp.data.count)
                          resolve(resp)


                      })
                      .catch(err => {console.log(err)
                      })


              })
          },
          pagebtnPrevious(){
              return new Promise((resolve, reject) => {
                  // commit('auth_request')
                  console.log('promise example ');
                  const token = sessionStorage.getItem('token');
                  axios.defaults.headers.common['Authorization'] = "Token " + token
                  console.log(axios.defaults.headers, 'headers in get');

                  //get Department
                  axios({url: this.linkPrev, method: 'GET' })

                      .then(resp => {
                          console.log('get',resp.data)
                          this.getFiltered2 = resp.data.results
                          this.linkPrev = resp.data.links.previous
                          this.linkNext = resp.data.links.next
                          this.getFarmerLength = resp.data.count % 100
                          console.log('pageprev', resp.data)
                          resolve(resp)


                      })
                      .catch(err => {console.log(err)
                      })

              })
          },
          pagebtnNext(){
              return new Promise((resolve, reject) => {
                  // commit('auth_request')
                  console.log('promise example ');
                  const token = sessionStorage.getItem('token');
                  axios.defaults.headers.common['Authorization'] = "Token " + token
                  console.log(axios.defaults.headers, 'headers in get');

                  //get Department
                  axios({url: this.linkNext, method: 'GET' })

                      .then(resp => {
                          console.log('get',resp.data)
                          this.getFiltered2 = resp.data.results
                          this.linkPrev = resp.data.links.previous
                          this.linkNext = resp.data.links.next
                          this.getFarmerLength = resp.data.count % 100
                          console.log('pagenext', resp.data)
                          resolve(resp)


                      })
                      .catch(err => {console.log(err)
                      })

              })
          },

          repostRequest($FullName){
              this.dataPage = $FullName
              this.dataPage1 = $FullName
              return new Promise((resolve, reject) => {
                  // commit('auth_request')
                  console.log('promise example ');
                  const token = sessionStorage.getItem('token');
                  axios.defaults.headers.common['Authorization'] = "Token " + token
                  console.log(axios.defaults.headers, 'headers in get');

                  //get Department
                  // axios({url: 'http://185.22.65.39:7000/vaccination/Vaccination/', method: 'GET' })
                  axios({url: 'http://185.22.65.39:7000/farmer/Farmer/?id='+this.filtername, method: 'GET' })

                      .then(resp => {
                          console.log('getFiltered',resp.data)
                          this.getFiltered = resp.data.results
                          this.linkPrev = resp.data.links.previous
                          this.linkNext = resp.data.links.next
                          console.log("ceeewf", this.getFiltered.results.livestocks)
                          resolve(resp)


                      })
                      .catch(err => {console.log(err)
                      })

              })
          },
          repostRequest2($FullName){
              this.dataPage = $FullName
              this.dataPage1 = $FullName
              return new Promise((resolve, reject) => {
                  // commit('auth_request')
                  console.log('promise example ');
                  const token = sessionStorage.getItem('token');
                  axios.defaults.headers.common['Authorization'] = "Token " + token
                  console.log(axios.defaults.headers, 'headers in get');

                  //get Department
                  // axios({url: 'http://185.22.65.39:7000/vaccination/Vaccination/', method: 'GET' })
                  axios({url: 'http://185.22.65.39:7000/vaccination/TableVaccination/?name='+this.filtername2+'&id='+this.filterid+'&start_date='+this.startdate+'&end_date='+this.enddate, method: 'GET' })

                      .then(resp => {
                          console.log('getFiltered2',resp.data)
                          this.getFiltered2 = resp.data.results
                          this.linkPrev = resp.data.links.previous
                          this.linkNext = resp.data.links.next
                          // console.log("Get Filtered2", this.getFiltered2.results)
                          resolve(resp)


                      })
                      .catch(err => {console.log(err)
                      })

              })
          },
          createReport(){
              let farname = this.farname
              console.log("Imya fermera",farname)

              this.$store.dispatch('createReport', {farname})
                  .then(() => {
                      this.$router.push('/farmer')

                  })
                  .catch(err => console.log(err))

          },
          createPDF () {
              let pdfName = 'test';
              var doc = new jsPDF();
              doc.text("Hello World", 10, 10);
              doc.save(pdfName + '.pdf');
          },
          generate(){


              var doc = new jsPDF('p', 'pt');

              var res = doc.autoTableHtmlToJson(document.getElementById("basic-table"));
              doc.autoTable(res.columns, res.data, {margin: {top: 80}});

              var header = function(data) {
                  doc.setFontSize(18);
                  doc.setTextColor(40);
                  doc.setFontStyle('normal');
                  //doc.addImage(headerImgData, 'JPEG', data.settings.margin.left, 20, 50, 50);
                  doc.text("Testing Report", data.settings.margin.left, 50);
              };

              var options = {
                  beforePageContent: header,
                  margin: {
                      top: 80
                  },
                  startY: doc.autoTableEndPosY() + 20
              };

              doc.autoTable(res.columns, res.data, options);

              doc.save("table.pdf");
          },
          generate2(){


              var doc = new jsPDF('p', 'pt');

              var res = doc.autoTableHtmlToJson(document.getElementById("basic-table"));
              doc.autoTable(res.columns, res.data, {margin: {top: 80}});

              var header = function(data) {
                  doc.setFontSize(18);
                  doc.setTextColor(40);
                  doc.setFontStyle('normal');
                  //doc.addImage(headerImgData, 'JPEG', data.settings.margin.left, 20, 50, 50);
                  doc.text("Testing Report", data.settings.margin.left, 50);
              };

              var options = {
                  beforePageContent: header,
                  margin: {
                      top: 80
                  },
                  startY: doc.autoTableEndPosY() + 20
              };

              doc.autoTable(res.columns, res.data, options);

              doc.save("table.pdf");
          },
        reportId ($FullName) {
          // now we have access to the native event
          this.isReport = $FullName
        },
        getBadge (status) {
          return status === 'Active' ? 'success'
            : status === 'Inactive' ? 'secondary'
              : status === 'Pending' ? 'warning'
                : status === 'Banned' ? 'danger' : 'primary'
        },
        getRowCount: function () {
          return this.items.length
        }
      }
    }



</script>

<style scoped>

</style>
