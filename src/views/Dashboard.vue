<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="6">
        <b-card>
          <div slot="header">
            <strong>Credit Card </strong> <small>Form</small>
          </div>
          <b-row>
            <b-col sm="12">
              <b-form-group>
                <label for="name">Name</label>
                <b-form-input type="text" id="name" placeholder="Enter your name"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="12">
              <b-form-group>
                <label for="ccnumber">Credit Card Number</label>
                <b-form-input type="text" id="ccnumber" placeholder="0000 0000 0000 0000"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="4">
              <b-form-group >
                <label for="month1">Month</label>
                <b-form-select id="month1"
                               :plain="true"
                               :options="[1,2,3,4,5,6,7,8,9,10,11,12]">
                </b-form-select>
              </b-form-group>
            </b-col>
            <b-col sm="4">
              <b-form-group>
                <label for="year1">Year</label>
                <b-form-select id="year1"
                               :plain="true"
                               :options="[2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025]">
                </b-form-select>
              </b-form-group>
            </b-col>
            <b-col sm="4">
              <b-form-group>
                <label for="cvv">CVV/CVC</label>
                <b-form-input type="text" id="cvv" placeholder="123"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      <b-col sm="6">
        <b-card>
          <div slot="header">
            <strong>Company </strong><small>Form</small>
          </div>
          <b-form-group>
            <label for="company">Company</label>
            <b-form-input type="text" id="company" placeholder="Enter your company name"></b-form-input>
          </b-form-group>
          <b-form-group>
            <label for="vat">VAT</label>
            <b-form-input type="text" id="vat" placeholder="PL1234567890"></b-form-input>
          </b-form-group>
          <b-form-group>
            <label for="street">Street</label>
            <b-form-input type="text" id="street" placeholder="Enter street name"></b-form-input>
          </b-form-group>
          <b-row>
            <b-col sm="8">
              <b-form-group>
                <label for="city">City</label>
                <b-form-input type="text" id="city" placeholder="Enter your city"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="4">
              <b-form-group>
                <label for="postal-code">Postal Code</label>
                <b-form-input type="text" id="postal-code" placeholder="Postal Code"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-form-group>
            <label for="country">Country</label>
            <b-form-input type="text" id="country" placeholder="Country name"></b-form-input>
          </b-form-group>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="6">
        <b-card>
          <div slot="header">
            <strong>Basic Form</strong> Elements
          </div>
          <b-form>
            <b-form-group
              description="Let us know your full name."
              label="Enter your name"
              label-for="basicName"
              :label-cols="3"
              :horizontal="true">
              <b-form-input id="basicName" type="text" autocomplete="name"></b-form-input>
            </b-form-group>
            <b-form-group
              label="Static"
              label-for="basicStatic"
              :label-cols="3"
              :horizontal="true">
              <b-form-input plaintext id="basicStatic" type="text" value="Username"></b-form-input>
            </b-form-group>
            <b-form-group
              description="This is a help text"
              label="Text Input"
              label-for="basicText"
              :label-cols="3"
              :horizontal="true">
              <b-form-input id="basicText" type="text" placeholder="Text"></b-form-input>
            </b-form-group>
            <b-form-group
              label="Date" label-for="date"
              :label-cols="3"
              :horizontal="true">
              <b-form-input type="date" id="date"></b-form-input>
            </b-form-group>
            <b-form-group
              description="Please enter your email"
              label="Email Input"
              label-for="basicEmail"
              :label-cols="3"
              :horizontal="true">
              <b-form-input id="basicEmail" type="email" placeholder="Enter your email" autocomplete="email"></b-form-input>
            </b-form-group>
            <b-form-group
              description="Please enter a complex password"
              label="Password Input"
              label-for="basicPassword"
              :label-cols="3"
              :horizontal="true">
              <b-form-input id="basicPassword" type="password" placeholder="Enter your password" autocomplete="current-password"></b-form-input>
            </b-form-group>
            <b-form-group
              label="Disabled Input"
              label-for="basicInputDisabled"
              :label-cols="3"
              :horizontal="true">
              <b-form-input id="basicInputDisabled" type="text" :disabled="true" placeholder="Disabled"></b-form-input>
            </b-form-group>
            <b-form-group
              label="Textarea"
              label-for="basicTextarea"
              :label-cols="3"
              :horizontal="true">
              <b-form-input id="basicTextarea" :textarea="true" :rows="9" placeholder="Content.."></b-form-input>
            </b-form-group>
            <b-form-group
              label="Select"
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
              label="Select large"
              label-for="basicSelectLg"
              :label-cols="3"
              :horizontal="true">
              <b-form-select id="basicSelectLg"
                             size="lg"
                             :plain="true"
                             :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                             value="Please select">
              </b-form-select>
            </b-form-group>
            <b-form-group
              label="Select small"
              label-for="basicSelectSm"
              :label-cols="3"
              :horizontal="true">
              <b-form-select id="basicSelectSm"
                             size="sm"
                             :plain="true"
                             :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                             value="Please select">
              </b-form-select>
            </b-form-group>
            <b-form-group
              label="Disabled select"
              label-for="basicSelectDisabled"
              :label-cols="3"
              :horizontal="true">
              <b-form-select id="basicSelectDisabled"
                             :plain="true"
                             :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                             :disabled="true"
                             value="Please select">
              </b-form-select>
            </b-form-group>
            <b-form-group
              label="Select"
              label-for="basicMultiSelect"
              :label-cols="3"
              :horizontal="true">
              <b-form-select id="basicMultiSelect"
                             :plain="true"
                             :multiple="true"
                             :options="[
                {
                  text: 'Please select some item',
                  value: null
                },
                {
                  text: 'This is First option',
                  value: 'a'
                }, {
                  text: 'Default Selected Option',
                  value: 'b'
                }, {
                  text: 'This is another option',
                  value: 'c'
                }, {
                  text: 'This one is disabled',
                  value: 'd',
                  disabled: true
                }]"
                             :value="[null,'c']">
              </b-form-select>
            </b-form-group>
            <b-form-group
              label="Radios"
              label-for="basicRadios"
              :label-cols="3"
              :horizontal="true">
              <b-form-radio-group id="basicRadios"
                                  :plain="true"
                                  :options="[
                {text: 'Option 1 ',value: '1'},
                {text: 'Option 2 ',value: '2'},
                {text: 'Option 3 ',value: '3'}
              ]"
                                  checked="2"
                                  stacked>
              </b-form-radio-group>
            </b-form-group>
            <b-form-group
              label="Inline radios"
              label-for="basicInlineRadios"
              :label-cols="3"
              :horizontal="true">
              <b-form-radio-group id="basicInlineRadios"
                                  :plain="true"
                                  :options="[
                {text: 'Option 1 ',value: '1'},
                {text: 'Option 2 ',value: '2'},
                {text: 'Option 3 ',value: '3'}
              ]"
                                  :checked="3">
              </b-form-radio-group>
            </b-form-group>

            <b-form-group
              label="Checkboxes"
              label-for="basicCheckboxes"
              :label-cols="3"
              horizontal>
              <b-form-checkbox-group stacked id="basicCheckboxes" name="Checkboxes" :plain="true" :checked="[2,3]">
                <b-form-checkbox value="1">Option 1</b-form-checkbox>
                <b-form-checkbox value="2">Option 2</b-form-checkbox>
                <b-form-checkbox value="3">Option 3</b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group>
            <b-form-group
              label="Inline checkboxes"
              label-for="basicInlineCheckboxes"
              :label-cols="3"
              :horizontal="true">
              <b-form-checkbox-group id="basicInlineCheckboxes" name="InlineCheckboxes" :plain="true" :checked="[1,3]">
                <b-form-checkbox :plain="true" value="1">Option 1</b-form-checkbox>
                <b-form-checkbox :plain="true" value="2">Option 2</b-form-checkbox>
                <b-form-checkbox :plain="true" value="3">Option 3</b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group>
            <!--custom controls - radios/checkboxes - temporary fix-->
            <b-form-group
              label="Radios - custom"
              label-for="basicRadiosCustom"
              :label-cols="3"
              :horizontal="true">
              <b-form-radio-group
                id="basicRadiosCustom"
                value="1"
                stacked>
                <div class="custom-control custom-radio">
                  <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" value="1">
                  <label class="custom-control-label" for="customRadio1">Option 1</label>
                </div>
                <div class="custom-control custom-radio">
                  <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input" value="2" checked>
                  <label class="custom-control-label" for="customRadio2">Option 2</label>
                </div>
                <div class="custom-control custom-radio">
                  <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input" value="3">
                  <label class="custom-control-label" for="customRadio3">Option 3</label>
                </div>
              </b-form-radio-group>
            </b-form-group>
            <b-form-group
              label="Inline radios - custom"
              label-for="basicCustomRadios1"
              :label-cols="3"
              :horizontal="true">
              <b-form-radio-group
                id="basicCustomRadios1"
                name="customRadioInline1">
                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input" value="1">
                  <label class="custom-control-label" for="customRadioInline1">Option 1</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input" value="2" checked>
                  <label class="custom-control-label" for="customRadioInline2">Option 2</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="customRadioInline3" name="customRadioInline1" class="custom-control-input" value="3">
                  <label class="custom-control-label" for="customRadioInline3">Option 3</label>
                </div>
              </b-form-radio-group>
            </b-form-group>
            <b-form-group
              label="Checkboxes - custom"
              label-for="basicCustomCheckboxes"
              :label-cols="3"
              :horizontal="true">
              <b-form-checkbox-group stacked id="basicCustomCheckboxes">
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customChk1" value="1" checked>
                  <label class="custom-control-label" for="customChk1">Option 1</label>
                </div>
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customChk2" value="2">
                  <label class="custom-control-label" for="customChk2">Option 2</label>
                </div>
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customChk3" value="3">
                  <label class="custom-control-label" for="customChk3">Option 3</label>
                </div>
              </b-form-checkbox-group>
            </b-form-group>
            <b-form-group
              label="Inline checkboxes - custom"
              label-for="basicInlineCustomCheckboxes"
              :label-cols="3"
              :horizontal="true">
              <b-form-checkbox-group id="basicInlineCustomCheckboxes">
                <div class="custom-control custom-checkbox custom-control-inline">
                  <input type="checkbox" class="custom-control-input" id="customInChk1" value="1">
                  <label class="custom-control-label" for="customInChk1">Option 1</label>
                </div>
                <div class="custom-control custom-checkbox custom-control-inline">
                  <input type="checkbox" class="custom-control-input" id="customInChk2" value="2" checked>
                  <label class="custom-control-label" for="customInChk2">Option 2</label>
                </div>
                <div class="custom-control custom-checkbox custom-control-inline">
                  <input type="checkbox" class="custom-control-input" id="customInChk3" value="3">
                  <label class="custom-control-label" for="customInChk3">Option 3</label>
                </div>
              </b-form-checkbox-group>
            </b-form-group>
            <b-form-group
              label="File input"
              label-for="fileInput"
              :label-cols="3"
              :horizontal="true">
              <b-form-file id="fileInput" :plain="true"></b-form-file>
            </b-form-group>
            <b-form-group
              label="Multiple file input"
              label-for="fileInputMulti"
              :label-cols="3"
              :horizontal="true">
              <b-form-file id="fileInputMulti" :plain="true" :multiple="true"></b-form-file>
            </b-form-group>
            <div slot="footer">
              <b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Submit</b-button>
              <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
            </div>
          </b-form>
        </b-card>
        <b-card>
          <div slot="header">
            <strong>Inline</strong> Form
          </div>
          <!-- Bootstrap Vue has some problems with Inline forms that's why we use some standard bootstrap classes -->
          <b-form inline>
            <label class="mr-sm-2" for="inlineInput1">Name: </label>
            <b-input id="inlineInput1" type="text" placeholder="Jane Doe"></b-input>
            <label class="mx-sm-2" for="inlineInput2">Email: </label>
            <b-input id="inlineInput2" type="email" placeholder="jane.doe@example.com" autocomplete="email"></b-input>
          </b-form>
          <div slot="footer">
            <b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Submit</b-button>
            <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
          </div>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card>
          <div slot="header">
            <strong>Horizontal</strong> Form
          </div>
          <b-form>
            <b-form-group
              label="Email"
              label-for="horizEmail"
              description="Please enter your email."
              :label-cols="3"
              :horizontal="true">
              <b-form-input id="horizEmail" type="email" placeholder="Enter Email.." autocomplete="username email"></b-form-input>
            </b-form-group>
            <b-form-group
              label="Password"
              label-for="horizPass"
              description="Please enter your password."
              :label-cols="3"
              :horizontal="true">
              <b-form-input id="horizPass" type="password" placeholder="Enter Password.." autocomplete="current-password"></b-form-input>
            </b-form-group>
            <div slot="footer">
              <b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Submit</b-button>
              <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
            </div>
          </b-form>
        </b-card>
        <b-card>
          <div slot="header">
            <strong>Normal</strong> Form
          </div>
          <b-form>
            <b-form-group validated
                          label="Email"
                          label-for="normalEmail"
                          description="Please enter your email.">
              <b-form-input id="normalEmail" type="email" placeholder="Enter Email.." required autocomplete="email"></b-form-input>
            </b-form-group>
            <b-form-group validated
                          label="Password"
                          label-for="normalPass"
                          description="Please enter your password.">
              <b-form-input id="normalPass" type="password" placeholder="Enter Password.." required autocomplete="current-password"></b-form-input>
            </b-form-group>
            <div slot="footer">
              <b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Submit</b-button>
              <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
            </div>
          </b-form>
        </b-card>
        <b-card no-body :no-block="true">
          <div slot="header">
            Input <strong>Grid</strong>
          </div>
          <b-card-body>
            <b-row class="form-group">
              <b-col sm="3">
                <b-form-input type="text" placeholder=".col-sm-3"></b-form-input>
              </b-col>
            </b-row>
            <b-row class="form-group">
              <b-col sm="4">
                <b-form-input type="text" placeholder=".col-sm-4"></b-form-input>
              </b-col>
            </b-row>
            <b-row class="form-group">
              <b-col sm="5">
                <b-form-input type="text" placeholder=".col-sm-5"></b-form-input>
              </b-col>
            </b-row>
            <b-row class="form-group">
              <b-col sm="6">
                <b-form-input type="text" placeholder=".col-sm-6"></b-form-input>
              </b-col>
            </b-row>
            <b-row class="form-group">
              <b-col sm="7">
                <b-form-input type="text" placeholder=".col-sm-7"></b-form-input>
              </b-col>
            </b-row>
            <b-row class="form-group">
              <b-col sm="8">
                <b-form-input type="text" placeholder=".col-sm-8"></b-form-input>
              </b-col>
            </b-row>
            <b-row class="form-group">
              <b-col sm="9">
                <b-form-input type="text" placeholder=".col-sm-9"></b-form-input>
              </b-col>
            </b-row>
            <b-row class="form-group">
              <b-col sm="10">
                <b-form-input type="text" placeholder=".col-sm-10"></b-form-input>
              </b-col>
            </b-row>
            <b-row class="form-group">
              <b-col sm="11">
                <b-form-input type="text" placeholder=".col-sm-11"></b-form-input>
              </b-col>
            </b-row>
            <b-row class="form-group">
              <b-col sm="12">
                <b-form-input type="text" placeholder=".col-sm-12"></b-form-input>
              </b-col>
            </b-row>
          </b-card-body>
          <div slot="footer">
            <b-button type="submit" size="sm" variant="primary"><i class="fa fa-user"></i> Login</b-button>
            <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
          </div>
        </b-card>
        <b-card>
          <div slot="header">
            Input <strong>Sizes</strong>
          </div>
          <b-form-group
            label="Small input"
            label-for="smInput"
            label-size="sm"
            :label-cols="5"
            :horizontal="true">
            <b-form-input id="smInput" type="text" size="sm" placeholder="size='sm'"></b-form-input>
          </b-form-group>
          <b-form-group
            label="Default input"
            label-for="defaultInput"
            :label-cols="5"
            :horizontal="true">
            <b-form-input  id="defaultInput" type="text" placeholder="normal"></b-form-input>
          </b-form-group>
          <b-form-group
            label="Large input"
            label-for="lgInput"
            label-size="lg"
            :label-cols="5"
            :horizontal="true">
            <b-form-input id="lgInput" type="text" size="lg" placeholder="size='lg'"></b-form-input>
          </b-form-group>
          <div slot="footer">
            <b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Submit</b-button>
            <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
          </div>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="12" md="6">
        <b-card no-body :no-block="true">
          <div slot="header">
            <strong>Validation feedback</strong> Form
          </div>
          <b-card-body>
            <b-form>
              <b-form-group validated>
                <label class="col-form-label" for="inputIsValid">Input is valid</label>
                <input type="text" class="form-control is-valid" id="inputIsValid">
                <b-form-valid-feedback>
                  Input is valid.
                </b-form-valid-feedback>
              </b-form-group>
              <b-form-group>
                <label class="col-form-label" for="inputIsInvalid">Input is invalid</label>
                <input type="text" class="form-control is-invalid" id="inputIsInvalid">
                <b-form-invalid-feedback>
                  Please provide a valid information.
                </b-form-invalid-feedback>
              </b-form-group>
            </b-form>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col sm="12" md="6">
        <b-card no-body :no-block="true">
          <div slot="header">
            <strong>Validation feedback</strong> Form
          </div>
          <b-card-body>
            <b-form validated novalidate>
              <b-form-group label-for="inputSuccess2" label="Non-required input">
                <b-form-input type="text" class="form-control-success" id="inputSuccess2"></b-form-input>
                <b-form-valid-feedback>
                  Input is not required.
                </b-form-valid-feedback>
              </b-form-group>
              <b-form-group label-for="inputError2" label="Required input">
                <b-form-input type="text" class="form-control-warning" id="inputError2" required></b-form-input>
                <b-form-valid-feedback>
                  Input provided.
                </b-form-valid-feedback>
                <b-form-invalid-feedback>
                  Please provide a required input.
                </b-form-invalid-feedback>
              </b-form-group>
            </b-form>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="4">
        <b-card>
          <div slot="header">
            <strong>Icon/Text</strong> Groups
          </div>
          <b-form-group>
            <b-input-group>
              <b-input-group-prepend>
                <b-input-group-text><i class="fa fa-user"></i></b-input-group-text>
              </b-input-group-prepend>
              <b-form-input type="text" placeholder="Username"></b-form-input>
            </b-input-group>
          </b-form-group>
          <b-form-group>
            <b-input-group>
              <b-form-input type="email" placeholder="Email" autocomplete="email"></b-form-input>
              <b-input-group-append><b-input-group-text><i class="fa fa-envelope-o"></i></b-input-group-text></b-input-group-append>
            </b-input-group>
          </b-form-group>
          <b-form-group>
            <b-input-group>
              <b-input-group-prepend>
                <b-input-group-text><i class="fa fa-euro"></i></b-input-group-text>
              </b-input-group-prepend>
              <b-form-input type="text" placeholder="ex. $1.000.000"></b-form-input>
              <b-input-group-append><b-input-group-text>.00</b-input-group-text></b-input-group-append>
            </b-input-group>
          </b-form-group>
          <div slot="footer">
            <b-button type="submit" size="sm" variant="success"><i class="fa fa-dot-circle-o"></i> Submit</b-button>
            <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
          </div>
        </b-card>
      </b-col>
      <b-col sm="4">
        <b-card>
          <div slot="header">
            <strong>Buttons</strong> Groups
          </div>
          <b-form-group>
            <b-input-group>
              <!-- Attach Left button -->
              <b-input-group-prepend>
                <b-button variant="primary">
                  <i class="fa fa-search"></i> Search
                </b-button>
              </b-input-group-prepend>
              <b-form-input type="text" placeholder="Username"></b-form-input>
            </b-input-group>
          </b-form-group>
          <b-form-group>
            <b-input-group>
              <b-form-input type="email" placeholder="Email" autocomplete="email"></b-form-input>
              <!-- Attach Right button -->
              <b-input-group-append>
                <b-button variant="primary">Submit</b-button>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
          <b-form-group>
            <b-input-group>
              <!-- Attach Left button -->
              <b-input-group-prepend>
                <b-button variant="primary"><i class="fa fa-facebook"></i></b-button>
              </b-input-group-prepend>
              <b-form-input type="email" placeholder="Email" autocomplete="email"></b-form-input>
              <!-- Attach Left button -->
              <b-input-group-append>
                <b-button variant="primary"><i class="fa fa-twitter"></i></b-button>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
          <div slot="footer">
            <b-button type="submit" size="sm" variant="success"><i class="fa fa-dot-circle-o"></i> Submit</b-button>
            <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
          </div>
        </b-card>
      </b-col>
      <b-col sm="4">
        <b-card>
          <div slot="header">
            <strong>Dropdowns</strong> Groups
          </div>
          <b-form-group>
            <b-input-group>
              <!-- Attach Left button -->
              <b-input-group-prepend>
                <b-dropdown text="Action" variant="primary">
                  <b-dropdown-item>Action</b-dropdown-item>
                  <b-dropdown-item>Another action</b-dropdown-item>
                  <b-dropdown-item>Something else here...</b-dropdown-item>
                  <b-dropdown-item disabled>Disabled action</b-dropdown-item>
                </b-dropdown>
              </b-input-group-prepend>
              <b-form-input placeholder="Username"></b-form-input>
            </b-input-group>
          </b-form-group>
          <b-form-group>
            <b-input-group>
              <b-form-input placeholder="Email"></b-form-input>
              <!-- Attach Right button -->
              <b-input-group-append>
                <b-dropdown text="Action" variant="primary" right>
                  <b-dropdown-item>Action</b-dropdown-item>
                  <b-dropdown-item>Another action</b-dropdown-item>
                  <b-dropdown-item>Something else here...</b-dropdown-item>
                  <b-dropdown-item disabled>Disabled action</b-dropdown-item>
                </b-dropdown>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
          <b-form-group>
            <b-input-group>
              <!-- Attach Left button -->
              <b-input-group-prepend>
                <b-dropdown text="Split" variant="primary" split>
                  <b-dropdown-item href="#">Action</b-dropdown-item>
                  <b-dropdown-item href="#">Another action</b-dropdown-item>
                  <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                  <b-dropdown-item disabled>Disabled action</b-dropdown-item>
                </b-dropdown>
              </b-input-group-prepend>
              <b-form-input placeholder="..."></b-form-input>
              <!-- Attach Right button -->
              <b-input-group-append>
                <b-dropdown text="Action" variant="primary" right>
                  <b-dropdown-item>Action</b-dropdown-item>
                  <b-dropdown-item>Another action</b-dropdown-item>
                  <b-dropdown-item>Something else here...</b-dropdown-item>
                  <b-dropdown-item disabled>Disabled action</b-dropdown-item>
                </b-dropdown>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
          <div slot="footer">
            <b-button type="submit" size="sm" variant="success"><i class="fa fa-dot-circle-o"></i> Submit</b-button>
            <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
          </div>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="6">
        <b-card>
          <div slot="header">
            Use the grid for big devices! <small><code>.col-lg-*</code> <code>.col-md-*</code> <code>.col-sm-*</code></small>
          </div>
          <b-row class="form-group">
            <b-col md="8">
              <b-form-input type="text" placeholder=".col-md-8"></b-form-input>
            </b-col>
            <b-col md="4">
              <b-form-input type="text" placeholder=".col-md-4"></b-form-input>
            </b-col>
          </b-row>
          <b-row class="form-group">
            <b-col md="7">
              <b-form-input type="text" placeholder=".col-md-7"></b-form-input>
            </b-col>
            <b-col md="5">
              <b-form-input type="text" placeholder=".col-md-5"></b-form-input>
            </b-col>
          </b-row>
          <b-row class="form-group">
            <b-col md="6">
              <b-form-input type="text" placeholder=".col-md-6"></b-form-input>
            </b-col>
            <b-col md="6">
              <b-form-input type="text" placeholder=".col-md-6"></b-form-input>
            </b-col>
          </b-row>
          <b-row class="form-group">
            <b-col md="5">
              <b-form-input type="text" placeholder=".col-md-5"></b-form-input>
            </b-col>
            <b-col md="7">
              <b-form-input type="text" placeholder=".col-md-7"></b-form-input>
            </b-col>
          </b-row>
          <b-row class="form-group">
            <b-col md="4">
              <b-form-input type="text" placeholder=".col-md-4"></b-form-input>
            </b-col>
            <b-col md="8">
              <b-form-input type="text" placeholder=".col-md-8"></b-form-input>
            </b-col>
          </b-row>
          <div slot="footer">
            <b-button type="submit" size="sm" variant="primary">Action</b-button>
            <b-button type="button" size="sm" variant="danger">Action</b-button>
            <b-button type="button" class="btn btn-sm btn-warning">Action</b-button>
            <b-button type="button" class="btn btn-sm btn-info">Action</b-button>
            <b-button type="button" size="sm" variant="success">Action</b-button>
          </div>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card>
          <div slot="header">
            Input Grid for small devices! <small> <code>.col-*</code></small>
          </div>
          <b-row class="form-group">
            <b-col cols="4">
              <b-form-input type="text" placeholder=".col-4"></b-form-input>
            </b-col>
            <b-col cols="8">
              <b-form-input type="text" placeholder=".col-8"></b-form-input>
            </b-col>
          </b-row>
          <b-row class="form-group">
            <b-col cols="5">
              <b-form-input type="text" placeholder=".col-5"></b-form-input>
            </b-col>
            <b-col cols="7">
              <b-form-input type="text" placeholder=".col-7"></b-form-input>
            </b-col>
          </b-row>
          <b-row class="form-group">
            <b-col cols="6">
              <b-form-input type="text" placeholder=".col-6"></b-form-input>
            </b-col>
            <b-col cols="6">
              <b-form-input type="text" placeholder=".col-6"></b-form-input>
            </b-col>
          </b-row>
          <b-row class="form-group">
            <b-col cols="7">
              <b-form-input type="text" placeholder=".col-5"></b-form-input>
            </b-col>
            <b-col cols="5">
              <b-form-input type="text" placeholder=".col-5"></b-form-input>
            </b-col>
          </b-row>
          <b-row class="form-group">
            <b-col cols="8">
              <b-form-input type="text" placeholder=".col-8"></b-form-input>
            </b-col>
            <b-col cols="4">
              <b-form-input type="text" placeholder=".col-4"></b-form-input>
            </b-col>
          </b-row>
          <div slot="footer">
            <b-button type="submit" size="sm" variant="primary">Action</b-button>
            <b-button type="button" size="sm" variant="danger">Action</b-button>
            <b-button type="button" class="btn btn-sm btn-warning">Action</b-button>
            <b-button type="button" class="btn btn-sm btn-info">Action</b-button>
            <b-button type="button" size="sm" variant="success">Action</b-button>
          </div>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="4">
        <b-card>
          <div slot="header">
            Example Form
          </div>
          <b-form>
            <b-form-group>
              <b-input-group>
                <b-input-group-prepend><b-input-group-text>Username</b-input-group-text></b-input-group-prepend>
                <b-form-input type="text"></b-form-input>
                <b-input-group-append><b-input-group-text><i class="fa fa-user"></i></b-input-group-text></b-input-group-append>
              </b-input-group>
            </b-form-group>
            <b-form-group>
              <b-input-group>
                <b-input-group-prepend><b-input-group-text>Email</b-input-group-text></b-input-group-prepend>
                <b-form-input type="email" autocomplete="email"></b-form-input>
                <b-input-group-append><b-input-group-text><i class="fa fa-envelope"></i></b-input-group-text></b-input-group-append>
              </b-input-group>
            </b-form-group>
            <b-form-group>
              <b-input-group>
                <b-input-group-prepend><b-input-group-text>Password</b-input-group-text></b-input-group-prepend>
                <b-form-input type="password" autocomplete="current-password"></b-form-input>
                <b-input-group-append><b-input-group-text><i class="fa fa-asterisk"></i></b-input-group-text></b-input-group-append>
              </b-input-group>
            </b-form-group>
            <div class="form-group form-actions">
              <b-button type="submit" size="sm" variant="primary">Submit</b-button>
            </div>
          </b-form>
        </b-card>
      </b-col>
      <b-col sm="4">
        <b-card>
          <div slot="header">
            Example Form
          </div>
          <b-form>
            <b-form-group>
              <b-input-group>
                <b-form-input type="text" placeholder="Username"></b-form-input>
                <b-input-group-append><b-input-group-text><i class="fa fa-user"></i></b-input-group-text></b-input-group-append>
              </b-input-group>
            </b-form-group>
            <b-form-group>
              <b-input-group>
                <b-form-input type="email" placeholder="Email" autocomplete="email"></b-form-input>
                <b-input-group-append><b-input-group-text><i class="fa fa-envelope"></i></b-input-group-text></b-input-group-append>
              </b-input-group>
            </b-form-group>
            <b-form-group>
              <b-input-group>
                <b-form-input type="password" placeholder="Password" autocomplete="current-password"></b-form-input>
                <b-input-group-append><b-input-group-text><i class="fa fa-asterisk"></i></b-input-group-text></b-input-group-append>
              </b-input-group>
            </b-form-group>
            <div class="form-group form-actions">
              <b-button type="submit" class="btn btn-sm btn-secondary">Submit</b-button>
            </div>
          </b-form>
        </b-card>
      </b-col>
      <b-col sm="4">
        <b-card>
          <div slot="header">
            Example Form
          </div>
          <b-form>
            <b-form-group>
              <b-input-group>
                <b-input-group-prepend>
                  <b-input-group-text><i class="fa fa-user"></i></b-input-group-text>
                </b-input-group-prepend>
                <b-form-input type="text" placeholder="Username"></b-form-input>
              </b-input-group>
            </b-form-group>
            <b-form-group>
              <b-input-group>
                <b-input-group-prepend>
                  <b-input-group-text><i class="fa fa-envelope"></i></b-input-group-text>
                </b-input-group-prepend>
                <b-form-input type="email" placeholder="Email" autocomplete="email"></b-form-input>
              </b-input-group>
            </b-form-group>
            <b-form-group>
              <b-input-group>
                <b-input-group-prepend>
                  <b-input-group-text><i class="fa fa-asterisk"></i></b-input-group-text>
                </b-input-group-prepend>
                <b-form-input type="password" placeholder="Password" autocomplete="current-password"></b-form-input>
              </b-input-group>
            </b-form-group>
            <div class="form-group form-actions">
              <b-button type="submit" size="sm" variant="success">Submit</b-button>
            </div>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="12">
        <transition name="fade">
          <b-card no-body v-if="show">
            <div slot="header">
              <i class="fa fa-edit"></i> Form Elements
              <div class="card-header-actions">
                <b-link href="#" class="card-header-action btn-setting">
                  <i class="icon-settings"></i>
                </b-link>
                <b-link class="card-header-action btn-minimize" v-b-toggle.collapse1>
                  <i class="icon-arrow-up"></i>
                </b-link>
                <b-link href="#" class="card-header-action btn-close" v-on:click="show = !show">
                  <i class="icon-close"></i>
                </b-link>
              </div>
            </div>
            <b-collapse id="collapse1" visible>
              <b-card-body>
                <b-form-group label="Prepended text" label-for="elementsEmail" description="Here's some help text">
                  <b-input-group>
                    <b-input-group-prepend>
                      <b-input-group-text>@</b-input-group-text>
                    </b-input-group-prepend>
                    <b-form-input id="elementsEmail" type="email" autocomplete="email"></b-form-input>
                  </b-input-group>
                </b-form-group>
                <b-form-group label="Appended text" label-for="elementsAppend" description="Here's some help text">
                  <b-input-group>
                    <b-form-input id="elementsAppend" type="text"></b-form-input>
                    <b-input-group-append><b-input-group-text>.00</b-input-group-text></b-input-group-append>
                  </b-input-group>
                </b-form-group>
                <b-form-group label="Append and prepend" label-for="elementsPrependAppend" description="Here's some help text">
                  <b-input-group>
                    <b-input-group-prepend>
                      <b-input-group-text>$</b-input-group-text>
                    </b-input-group-prepend>
                    <b-form-input id="elementsPrependAppend" type="text"></b-form-input>
                    <b-input-group-append><b-input-group-text>.00</b-input-group-text></b-input-group-append>
                  </b-input-group>
                </b-form-group>
                <b-form-group label="Append with button" label-for="elementsAppendButton" description="Here's some help text">
                  <b-input-group>
                    <b-form-input id="elementsAppendButton" type="text"></b-form-input>
                    <b-input-group-append>
                      <b-button variant="primary">Go!</b-button>
                    </b-input-group-append>
                  </b-input-group>
                </b-form-group>
                <b-form-group label="Two-buttons append" label-for="elementsTwoButtons">
                  <b-input-group>
                    <b-form-input id="elementsTwoButtons" type="text"></b-form-input>
                    <b-input-group-append>
                      <b-button variant="primary">Search</b-button>
                      <b-button variant="danger">Options</b-button>
                    </b-input-group-append>
                  </b-input-group>
                </b-form-group>
                <div class="form-actions">
                  <b-button type="submit" variant="primary">Save changes</b-button>
                  <b-button type="button" variant="secondary">Cancel</b-button>
                </div>
              </b-card-body>
            </b-collapse>
          </b-card>
        </transition>
      </b-col>
    </b-row>


    <b-row>
      <b-col sm="6" lg="3">
        <b-card no-body class="bg-primary">
          <b-card-body class="pb-0">
            <b-dropdown class="float-right" variant="transparent p-0" right>
              <template slot="button-content">
                <i class="icon-settings"></i>
              </template>
              <b-dropdown-item>Action</b-dropdown-item>
              <b-dropdown-item>Another action</b-dropdown-item>
              <b-dropdown-item>Something else here...</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
            <h4 class="mb-0">9.823</h4>
            <p>Members online</p>
          </b-card-body>
          <card-line1-chart-example chartId="card-chart-01" class="chart-wrapper px-3" style="height:70px;" :height="70"/>
        </b-card>
      </b-col>
      <b-col sm="6" lg="3">
        <b-card no-body class="bg-info">
          <b-card-body class="pb-0">
            <b-dropdown class="float-right" variant="transparent p-0" right no-caret>
              <template slot="button-content">
                <i class="icon-location-pin"></i>
              </template>
              <b-dropdown-item>Action</b-dropdown-item>
              <b-dropdown-item>Another action</b-dropdown-item>
              <b-dropdown-item>Something else here...</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
            <h4 class="mb-0">9.823</h4>
            <p>Members online</p>
          </b-card-body>
          <card-line2-chart-example chartId="card-chart-02" class="chart-wrapper px-3" style="height:70px;" :height="70"/>
        </b-card>
      </b-col>
      <b-col sm="6" lg="3">
        <b-card no-body class="bg-warning">
          <b-card-body class="pb-0">
            <b-dropdown class="float-right" variant="transparent p-0" right>
              <template slot="button-content">
                <i class="icon-settings"></i>
              </template>
              <b-dropdown-item>Action</b-dropdown-item>
              <b-dropdown-item>Another action</b-dropdown-item>
              <b-dropdown-item>Something else here...</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
            <h4 class="mb-0">9.823</h4>
            <p>Members online</p>
          </b-card-body>
          <card-line3-chart-example chartId="card-chart-03" class="chart-wrapper" style="height:70px;" height="70"/>
        </b-card>
      </b-col>
      <b-col sm="6" lg="3">
        <b-card no-body class="bg-danger">
          <b-card-body class="pb-0">
            <b-dropdown class="float-right" variant="transparent p-0" right>
              <template slot="button-content">
                <i class="icon-settings"></i>
              </template>
              <b-dropdown-item>Action</b-dropdown-item>
              <b-dropdown-item>Another action</b-dropdown-item>
              <b-dropdown-item>Something else here...</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
            <h4 class="mb-0">9.823</h4>
            <p>Members online</p>
          </b-card-body>
          <card-bar-chart-example chartId="card-chart-04" class="chart-wrapper px-3" style="height:70px;" height="70"/>
        </b-card>
      </b-col>
    </b-row>

    <b-card>
      <b-row>
        <b-col sm="5">
          <h4 id="traffic" class="card-title mb-0">Traffic</h4>
          <div class="small text-muted">November 2017</div>
        </b-col>
        <b-col sm="7" class="d-none d-md-block">
          <b-button type="button" variant="primary" class="float-right"><i class="icon-cloud-download"></i></b-button>
          <b-button-toolbar class="float-right" aria-label="Toolbar with buttons group">
            <b-form-radio-group class="mr-3" id="radiosBtn" buttons button-variant="outline-secondary" v-model="selected" name="radiosBtn">
              <b-form-radio class="mx-0" value="Day">Day</b-form-radio>
              <b-form-radio class="mx-0" value="Month">Month</b-form-radio>
              <b-form-radio class="mx-0" value="Year">Year</b-form-radio>
            </b-form-radio-group>
          </b-button-toolbar>
        </b-col>
      </b-row>
      <main-chart-example chartId="main-chart-01" class="chart-wrapper" style="height:300px;margin-top:40px;" height="300"></main-chart-example>
      <div slot="footer">
        <b-row class="text-center">
          <b-col class="mb-sm-2 mb-0">
            <div class="text-muted">Visits</div>
            <strong>29.703 Users (40%)</strong>
            <b-progress height={} class="progress-xs mt-2" :precision="1" variant="success" :value="40"></b-progress>
          </b-col>
          <b-col class="mb-sm-2 mb-0 d-md-down-none">
            <div class="text-muted">Unique</div>
            <strong>24.093 Users (20%)</strong>
            <b-progress height={} class="progress-xs mt-2" :precision="1" variant="info" :value="20"></b-progress>
          </b-col>
          <b-col class="mb-sm-2 mb-0">
            <div class="text-muted">Pageviews</div>
            <strong>78.706 Views (60%)</strong>
            <b-progress height={} class="progress-xs mt-2" :precision="1" variant="warning" :value="60"></b-progress>
          </b-col>
          <b-col class="mb-sm-2 mb-0">
            <div class="text-muted">New Users</div>
            <strong>22.123 Users (80%)</strong>
            <b-progress height={} class="progress-xs mt-2" :precision="1" variant="danger" :value="80"></b-progress>
          </b-col>
          <b-col class="mb-sm-2 mb-0 d-md-down-none">
            <div class="text-muted">Bounce Rate</div>
            <strong>Average Rate (40.15%)</strong>
            <b-progress height={} class="progress-xs mt-2" :precision="1" :value="40"></b-progress>
          </b-col>
        </b-row>
      </div>
    </b-card>
    <b-row>
      <b-col sm="6" lg="3">
        <div class="brand-card">
          <div class="brand-card-header bg-facebook">
            <i class="fa fa-facebook"></i>
            <div class="chart-wrapper">
              <social-box-chart-example chartId="box-chart-01" :data="[65, 59, 84, 84, 51, 55, 40]" />
            </div>
          </div>
          <div class="brand-card-body">
            <div>
              <div class="text-value">89k</div>
              <div class="text-uppercase text-muted small">friends</div>
            </div>
            <div>
              <div class="text-value">459</div>
              <div class="text-uppercase text-muted small">feeds</div>
            </div>
          </div>
        </div>
      </b-col>
      <b-col sm="6" lg="3">
        <div class="brand-card">
          <div class="brand-card-header bg-twitter">
            <i class="fa fa-twitter"></i>
            <div class="chart-wrapper">
              <social-box-chart-example chartId="box-chart-02" :data="[1, 13, 9, 17, 34, 41, 38]" />
            </div>
          </div>
          <div class="brand-card-body">
            <div>
              <div class="text-value">973k</div>
              <div class="text-uppercase text-muted small">followers</div>
            </div>
            <div>
              <div class="text-value">1.792</div>
              <div class="text-uppercase text-muted small">tweets</div>
            </div>
          </div>
          </div>
      </b-col>
      <b-col sm="6" lg="3">
        <div class="brand-card">
          <div class="brand-card-header bg-linkedin">
            <i class="fa fa-linkedin"></i>
            <div class="chart-wrapper">
              <social-box-chart-example chartId="box-chart-03" :data="[78, 81, 80, 45, 34, 12, 40]" />
            </div>
          </div>
          <div class="brand-card-body">
            <div>
              <div class="text-value">500+</div>
              <div class="text-uppercase text-muted small">contacts</div>
            </div>
            <div>
              <div class="text-value">292</div>
              <div class="text-uppercase text-muted small">feeds</div>
            </div>
          </div>
        </div>
      </b-col>
      <b-col sm="6" lg="3">
        <div class="brand-card">
          <div class="brand-card-header bg-google-plus">
            <i class="fa fa-google-plus"></i>
            <div class="chart-wrapper">
              <social-box-chart-example chartId="box-chart-04" :data="[35, 23, 56, 22, 97, 23, 64]" />
            </div>
          </div>
          <div class="brand-card-body">
            <div>
              <div class="text-value">894</div>
              <div class="text-uppercase text-muted small">followers</div>
            </div>
            <div>
              <div class="text-value">92</div>
              <div class="text-uppercase text-muted small">circles</div>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="12">
        <b-card header="Traffic &amp; Sales">
          <b-row>
            <b-col sm="12" lg="6">
              <b-row>
                <b-col sm="6">
                  <Callout variant="info">
                    <small class="text-muted">New Clients</small><br>
                    <strong class="h4">9,123</strong>
                    <div class="chart-wrapper" :style="{ top: '-10px'}">
                      <!--<callout-chart-example :data="[35, 23, 56, 22, 97, 23, 64]" variant="#20a8d8" width="80" height="30" />-->
                      <callout-chart-example chartId="callout-chart-01" :data="[35, 23, 56, 22, 97, 23, 64]" variant="info" width="80" height="30" />
                    </div>
                  </Callout>
                </b-col>
                <b-col sm="6">
                  <Callout variant="danger">
                    <small class="text-muted">Recurring Clients</small><br>
                    <strong class="h4">22,643</strong>
                    <div class="chart-wrapper" :style="{ top: '-10px'}">
                      <callout-chart-example chartId="callout-chart-02" :data="[65, 59, 84, 84, 51, 55, 40]" variant="danger" width="80" height="30" />
                    </div>
                  </Callout>
                </b-col>
              </b-row>
              <hr class="mt-0">
              <div class="progress-group mb-4">
                <div class="progress-group-prepend">
                  <span class="progress-group-text">
                    Monday
                  </span>
                </div>
                <div class="progress-group-bars">
                  <b-progress class="progress-xs" variant="info" :value="34" height={} />
                  <b-progress class="progress-xs" variant="danger" :value="78" height={} />
                </div>
              </div>
              <div class="progress-group mb-4">
                <div class="progress-group-prepend">
                  <span class="progress-group-text">
                    Tuesday
                  </span>
                </div>
                <div class="progress-group-bars">
                  <b-progress height={} class="progress-xs" :value="56" variant="info"></b-progress>
                  <b-progress height={} class="progress-xs" :value="94" variant="danger"></b-progress>
                </div>
              </div>
              <div class="progress-group mb-4">
                <div class="progress-group-prepend">
                  <span class="progress-group-text">
                    Wednesday
                  </span>
                </div>
                <div class="progress-group-bars">
                  <b-progress height={} class="progress-xs" :value="12" variant="info"></b-progress>
                  <b-progress height={} class="progress-xs" :value="67" variant="danger"></b-progress>
                </div>
              </div>
              <div class="progress-group mb-4">
                <div class="progress-group-prepend">
                  <span class="progress-group-text">
                    Thursday
                  </span>
                </div>
                <div class="progress-group-bars">
                  <b-progress height={} class="progress-xs" :value="43" variant="info"></b-progress>
                  <b-progress height={} class="progress-xs" :value="91" variant="danger"></b-progress>
                </div>
              </div>
              <div class="progress-group mb-4">
                <div class="progress-group-prepend">
                  <span class="progress-group-text">
                    Friday
                  </span>
                </div>
                <div class="progress-group-bars">
                  <b-progress height={} class="progress-xs" :value="22" variant="info"></b-progress>
                  <b-progress height={} class="progress-xs" :value="73" variant="danger"></b-progress>
                </div>
              </div>
              <div class="progress-group mb-4">
                <div class="progress-group-prepend">
                  <span class="progress-group-text">
                    Saturday
                  </span>
                </div>
                <div class="progress-group-bars">
                  <b-progress height={} class="progress-xs" :value="53" variant="info"></b-progress>
                  <b-progress height={} class="progress-xs" :value="82" variant="danger"></b-progress>
                </div>
              </div>
              <div class="progress-group mb-4">
                <div class="progress-group-prepend">
                  <span class="progress-group-text">
                    Sunday
                  </span>
                </div>
                <div class="progress-group-bars">
                  <b-progress height={} class="progress-xs" :value="9" variant="info"></b-progress>
                  <b-progress height={} class="progress-xs" :value="69" variant="danger"></b-progress>
                </div>
              </div>
              <div class="legend text-center">
                <small>
                  <sup><b-badge pill variant="info">&nbsp;</b-badge></sup>
                  New clients
                  &nbsp;&nbsp;
                  <sup><b-badge pill variant="danger">&nbsp;</b-badge></sup>
                  Recurring clients
                </small>
              </div>
            </b-col>
            <b-col sm="12" lg="6">
              <b-row>
                <b-col sm="6">
                  <Callout variant="warning">
                    <small class="text-muted">Pageviews</small><br>
                    <strong class="h4">78,623</strong>
                    <div class="chart-wrapper" :style="{ top: '-10px'}">
                      <callout-chart-example chartId="callout-chart-03" :data="[35, 23, 56, 22, 97, 23, 64]" variant="#f8cb00" width="80" height="30"/>
                    </div>
                  </Callout>
                </b-col>
                <b-col sm="6">
                  <Callout variant="success">
                    <small class="text-muted">Organic</small><br>
                    <strong class="h4">49,123</strong>
                    <div class="chart-wrapper" :style="{ top: '-10px'}">
                      <callout-chart-example chartId="callout-chart-04" :data="[65, 59, 84, 84, 51, 55, 40]" variant="#4dbd74" width="80" height="30" />
                    </div>
                  </Callout>
                </b-col>
              </b-row>
              <hr class="mt-0">
              <ul class="horizontal-bars type-2">
                <div class="progress-group">
                  <div class="progress-group-header">
                    <i class="icon-user progress-group-icon"></i>
                    <span class="title">Male</span>
                    <span class="ml-auto font-weight-bold">43%</span>
                  </div>
                  <div class="progress-group-bars">
                    <b-progress height={} class="progress-xs" :value="43" variant="warning"></b-progress>
                  </div>
                </div>
                <div class="progress-group mb-5">
                  <div class="progress-group-header">
                    <i class="icon-user-female progress-group-icon"></i>
                    <span class="title">Female</span>
                    <span class="ml-auto font-weight-bold">37%</span>
                  </div>
                  <div class="progress-group-bars">
                    <b-progress height={} class="progress-xs" :value="37" variant="warning"></b-progress>
                  </div>
                </div>
                <div class="progress-group">
                  <div class="progress-group-header">
                    <i class="icon-globe progress-group-icon"></i>
                    <span class="title">Organic Search</span>
                    <span class="ml-auto font-weight-bold">191,235 <span class="text-muted small">(56%)</span></span>
                  </div>
                  <div class="progress-group-bars">
                    <b-progress height={} class="progress-xs" :value="56" variant="success"></b-progress>
                  </div>
                </div>
                <div class="progress-group">
                  <div class="progress-group-header">
                    <i class="icon-social-facebook progress-group-icon"></i>
                    <span class="title">Facebook</span>
                    <span class="ml-auto font-weight-bold">51,223 <span class="text-muted small">(15%)</span></span>
                  </div>
                  <div class="progress-group-bars">
                    <b-progress height={} class="progress-xs" :value="15" variant="success"></b-progress>
                  </div>
                </div>
                <div class="progress-group">
                  <div class="progress-group-header">
                    <i class="icon-social-twitter progress-group-icon"></i>
                    <span class="title">Twitter</span>
                    <span class="ml-auto font-weight-bold">37,564 <span class="text-muted small">(11%)</span></span>
                  </div>
                  <div class="progress-group-bars">
                    <b-progress height={} class="progress-xs" :value="11" variant="success"></b-progress>
                  </div>
                </div>
                <div class="progress-group">
                  <div class="progress-group-header">
                    <i class="icon-social-linkedin progress-group-icon"></i>
                    <span class="title">LinkedIn</span>
                    <span class="ml-auto font-weight-bold">27,319 <span class="text-muted small">&nbsp;(8%)</span></span>
                  </div>
                  <div class="progress-group-bars">
                    <b-progress height={} class="progress-xs" :value="8" variant="success"></b-progress>
                  </div>
                </div>
                <div class="divider text-center">
                  <b-button variant="link" size="sm" class="text-muted"><i class="icon-options"></i></b-button>
                </div>
              </ul>
            </b-col>
          </b-row>
          <br/>
          <b-table class="mb-0 table-outline" responsive="sm" hover :items="tableItems" :fields="tableFields" head-variant="light">
            <div slot="avatar" class="avatar" slot-scope="item">
              <img :src="item.value.url" class="img-avatar" alt="">
              <span class="avatar-status" v-bind:class="{ 'bg-success': item.value.status == 'success',  'bg-warning': item.value.status == 'warning', 'bg-danger': item.value.status == 'danger', 'bg-secondary': item.value.status == '' }"></span>
            </div>
            <div slot="user" slot-scope="item">
              <div>{{item.value.name}}</div>
              <div class="small text-muted">
                <span>
                  <template v-if="item.value.new">New</template>
                  <template v-else>Recurring</template>
                </span> | Registered: {{item.value.registered}}
              </div>
            </div>
            <i slot="country" class="h4 mb-0" :class="flag(item.value.flag)" slot-scope="item" :title="item.value.flag" :id="item.value.flag"></i>
            <i class="flag-icon flag-icon-pw h1" title="pw" id="pw"></i>
            <div slot="usage" slot-scope="item">
              <div class="clearfix">
                <div class="float-left">
                  <strong>{{item.value.value}}%</strong>
                </div>
                <div class="float-right">
                  <small class="text-muted">{{item.value.period}}</small>
                </div>
              </div>
              <b-progress height={} class="progress-xs" v-model="item.value.value" :variant="variant(item.value.value)"></b-progress>
            </div>
            <i slot="payment" slot-scope="item" :class="item.value.icon" style="font-size:24px"></i>
            <div slot="activity" slot-scope="item">
              <div class="small text-muted">Last login</div>
              <strong>{{item.value}}</strong>
            </div>
          </b-table>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import CardLine1ChartExample from './dashboard/CardLine1ChartExample'
import CardLine2ChartExample from './dashboard/CardLine2ChartExample'
import CardLine3ChartExample from './dashboard/CardLine3ChartExample'
import CardBarChartExample from './dashboard/CardBarChartExample'
import MainChartExample from './dashboard/MainChartExample'
import SocialBoxChartExample from './dashboard/SocialBoxChartExample'
import CalloutChartExample from './dashboard/CalloutChartExample'
import { Callout } from '@coreui/vue'

export default {
  name: 'dashboard',
  components: {
    Callout,
    CardLine1ChartExample,
    CardLine2ChartExample,
    CardLine3ChartExample,
    CardBarChartExample,
    MainChartExample,
    SocialBoxChartExample,
    CalloutChartExample
  },
  data: function () {
    return {
      selected: 'Month',
      tableItems: [
        {
          avatar: { url: 'img/avatars/1.jpg', status: 'success' },
          user: { name: 'Yiorgos Avraamu', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'USA', flag: 'us' },
          usage: { value: 50, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Mastercard', icon: 'fa fa-cc-mastercard' },
          activity: '10 sec ago'
        },
        {
          avatar: { url: 'img/avatars/2.jpg', status: 'danger' },
          user: { name: 'Avram Tarasios', new: false, registered: 'Jan 1, 2015' },
          country: { name: 'Brazil', flag: 'br' },
          usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Visa', icon: 'fa fa-cc-visa' },
          activity: '5 minutes ago'
        },
        {
          avatar: { url: 'img/avatars/3.jpg', status: 'warning' },
          user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'India', flag: 'in' },
          usage: { value: 74, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Stripe', icon: 'fa fa-cc-stripe' },
          activity: '1 hour ago'
        },
        {
          avatar: { url: 'img/avatars/4.jpg', status: '' },
          user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'France', flag: 'fr' },
          usage: { value: 98, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'PayPal', icon: 'fa fa-paypal' },
          activity: 'Last month'
        },
        {
          avatar: { url: 'img/avatars/5.jpg', status: 'success' },
          user: { name: 'Agapetus Tadeáš', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'Spain', flag: 'es' },
          usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Google Wallet', icon: 'fa fa-google-wallet' },
          activity: 'Last week'
        },
        {
          avatar: { url: 'img/avatars/6.jpg', status: 'danger' },
          user: { name: 'Friderik Dávid', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'Poland', flag: 'pl' },
          usage: { value: 43, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Amex', icon: 'fa fa-cc-amex' },
          activity: 'Last week'
        }
      ],
      tableFields: {
        avatar: {
          label: '<i class="icon-people"></i>',
          class: 'text-center'
        },
        user: {
          label: 'User'
        },
        country: {
          label: 'Country',
          class: 'text-center'
        },
        usage: {
          label: 'Usage'
        },
        payment: {
          label: 'Payment method',
          class: 'text-center'
        },
        activity: {
          label: 'Activity'
        }
      }
    }
  },
  methods: {
    variant (value) {
      let $variant
      if (value <= 25) {
        $variant = 'info'
      } else if (value > 25 && value <= 50) {
        $variant = 'success'
      } else if (value > 50 && value <= 75) {
        $variant = 'warning'
      } else if (value > 75 && value <= 100) {
        $variant = 'danger'
      }
      return $variant
    },
    flag (value) {
      return 'flag-icon flag-icon-' + value
    }
  }
}
</script>

<style>
  /* IE fix */
  #card-chart-01, #card-chart-02 {
    width: 100% !important;
  }
</style>
