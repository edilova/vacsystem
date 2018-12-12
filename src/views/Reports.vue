<template>


  <div class="wrapper">
    <div class="animated fadeIn">
      <div>

        <b-dropdown id="ddown1" text="Выбрать отчет" class="m-2">
          <b-dropdown-item v-on:click="reportId('report0')">Отчет по датам</b-dropdown-item>
          <b-dropdown-item v-on:click="reportId('report1')">Информация по миграции одного животного по идентификационному номеру</b-dropdown-item>
          <b-dropdown-item v-on:click="reportId('report2')">Информация по количеству зарегистрированных животных у владельца </b-dropdown-item>
          <b-dropdown-item v-on:click="reportId('report3')">Информация по количеству снятых животных у владельца </b-dropdown-item>
          <!--<b-dropdown-item v-on:click="reportId('report4')">Информация по количеству животных у владельцев</b-dropdown-item>-->
          <b-dropdown-item v-on:click="reportId('report5')">Информация по породам (масти) животных</b-dropdown-item>
          <b-dropdown-item v-on:click="reportId('report6')">Информация по половозрастным группам животных</b-dropdown-item>
          <b-dropdown-item v-on:click="reportId('report7')">Информация по зарегистрированным и снятым с учета животных</b-dropdown-item>
          <b-dropdown-item v-on:click="reportId('report8')">Информация по прибывшим животным из других регионов</b-dropdown-item>
          <b-dropdown-item v-on:click="reportId('report9')">Информация по снятым животным </b-dropdown-item>
          <b-dropdown-item v-on:click="reportId('report10')">Отчет по ветеринарно-профилактическим мероприятиям</b-dropdown-item>
          <b-dropdown-item v-on:click="reportId('report11')">Отчет по болезням с/х животных</b-dropdown-item>
          <b-dropdown-item v-on:click="reportId('report12')">Отчет по исследованиям с/х животных</b-dropdown-item>
          <b-dropdown-item v-on:click="reportId('report13')">Отчет по замененным ИНЖ</b-dropdown-item>
          <b-dropdown-item v-on:click="reportId('report14')">Информация по зарегистрированным/выбывшим животным одного владельца (Учет откорма животных)</b-dropdown-item>



        </b-dropdown>
      </div>


      <div id="wrapper">
        <div v-show="isReport == 'report0'">

          <c-table :table-data="items" striped caption="<small style='font-size: 1.5rem'> Отчет по датам</small>"></c-table>
        </div>
        <div v-show="isReport =='report1'">
          <b-card>
            <h5 class="text-center mb-3">Информация по миграции одного животного по идентификационному номеру</h5>

            <b-form>
              <b-form-group
                label="ИНЖ животного:"
                label-for="basicName"
                :label-cols="3"
                :horizontal="true">
                <b-form-input id="basicName" type="text" autocomplete="name"></b-form-input>
              </b-form-group>

            </b-form>
            <div class="form-actions">
              <b-button type="submit" variant="primary">Сформировать</b-button>
            </div>
          </b-card>

        </div>
        <div v-show="isReport =='report2'">
          <b-card>
            <h5 class="text-center mb-3">Информация по количеству зарегистрированных животных у владельца</h5>
            <b-form>
              <b-form-group
                description="Let us know your full name."
                label="Владелец/Пользователь"
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
          isReport: 'report0',
          selected: null,
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
            'Область': 'oblast',
            'Район': 'raion',
            'С.о': 'seok',
            'Владелец': 'owner',
            'Вид иммунизации': 'vidimm',
            'Наименование заболевания': 'sick',
            'Количество животных': 'numoflivestock',
            'Итого': 'itogo'
          },
          json_data: [
            {
              'oblast': 'Алматинская Область',
              'raion': 'Аксуский',
              'seok': 'Жансугуров',
              'owner': 'Имя Фамилия',
              'vidimm': 'Вид иммунизации',
              'sick': 'Болезнь',
              'numoflivestock': '56',
              'itogo': '123456',

            },
            {
              'oblast': 'Алматинская Область',
              'raion': 'Аксуский',
              'seok': 'Жансугуров',
              'owner': 'Имя Фамилия',
              'vidimm': 'Вид иммунизации',
              'sick': 'Болезнь',
              'numoflivestock': '456',
              'itogo': '123456',

            }
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
      methods: {
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
