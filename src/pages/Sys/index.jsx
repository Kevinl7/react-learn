import React from 'react'
import SchemaForm, {
  FormButtonGroup,
  Field,
  Submit,
  FormItemGrid,
  FormCard,
  createFormActions
} from '@uform/antd'
import 'antd/dist/antd.css'
import './index.less'

const actions = createFormActions()

class Sys extends React.Component {
  
  state = {
    name: '',
    age: '',
    sex: null,
    date: ''
  }



  handleClick = (values) => {
    console.log('w',this.state)
    
  }

  render () {
    return (
      <SchemaForm
        className='schem'
        onSubmit={values=>this.handleClick(values)}
        effects={($) => {
          $('onFieldChange', 'name').subscribe(fieldState => {
            this.setState({ name: fieldState.value || ''})
          })
          $('onFieldChange', 'age').subscribe(fieldState => {
            this.setState({ age: fieldState.value || '' })
          })
          $('onFieldChange', 'sex').subscribe(fieldState => {
            this.setState({ sex: fieldState.value || '' })
          })
          $('onFieldChange', 'date').subscribe(fieldState => {
            this.setState({ date: fieldState.value || '' })
          })
        }}>
        <FormItemGrid gutter={20} cols={[{ xs: 24, sm: 12, md: 8 }, { xs: 24, sm: 12, md: 8 }, { xs: 24, sm: 12, md: 8 }, { xs: 24, sm: 12, md: 8 }]}>
        <Field 
          name="name" 
          type="string" 
          title="名称"
          x-rules={{ required: true, message: "该字段必填" }}/>
        <Field 
          type="number" 
          title="年龄" 
          name="age"
          x-props={{ style: { width: '100%' } }}/>
        <Field
          type="string"
            enum={[{ label: '男', value: 'man'},{label: '女', value: 'women' }]}
          required
          title="性别"
          name="sex"
        />
        <Field 
          type="date" 
          title="日期选择" 
          name="date"
          x-props={{style: {width: '100%'}}} />
      </FormItemGrid>
        
        <FormButtonGroup>
            <Submit>提交</Submit>
        </FormButtonGroup>
      </SchemaForm>
    )
  }
}

export default Sys
