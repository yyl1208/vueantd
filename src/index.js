import { Row, Col } from './components/grid'
import { Icon } from './components/icon'
import { Button, ButtonGroup } from './components/button'
import { Input } from './components/input'
import { Popper } from './components/popper'
import { Dropdown, DropdownMenu, DropdownItem } from './components/dropdown'
import { Breadcrumb, BreadcrumbItem } from './components/breadcrumb'
import { Checkbox, CheckboxGroup } from './components/checkbox'
import { Radio, RadioGroup } from './components/radio'
import { Select, Option, OptionGroup } from './components/select'
import { Switch } from './components/switch'
import { Badge } from './components/badge'
import { Backtop } from './components/backtop'
import { Tag } from './components/tag'
import { Alert } from './components/alert'
import { Modal, FastModal } from './components/modal'

import { Notification } from './components/notification'
import { Message } from './components/message'

const install = function (Vue) {
  Vue.component(Row.name, Row)
  Vue.component(Col.name, Col)
  Vue.component(Icon.name, Icon)
  Vue.component(Button.name, Button)
  Vue.component(ButtonGroup.name, ButtonGroup)
  Vue.component(Input.name, Input)
  Vue.component(Popper.name, Popper)
  Vue.component(Dropdown.name, Dropdown)
  Vue.component(DropdownMenu.name, DropdownMenu)
  Vue.component(DropdownItem.name, DropdownItem)
  Vue.component(Breadcrumb.name, Breadcrumb)
  Vue.component(BreadcrumbItem.name, BreadcrumbItem)
  Vue.component(Checkbox.name, Checkbox)
  Vue.component(CheckboxGroup.name, CheckboxGroup)
  Vue.component(Radio.name, Radio)
  Vue.component(RadioGroup.name, RadioGroup)
  Vue.component(Select.name, Select)
  Vue.component(Option.name, Option)
  Vue.component(OptionGroup.name, OptionGroup)
  Vue.component(Switch.name, Switch)
  Vue.component(Badge.name, Badge)
  Vue.component(Backtop.name, Backtop)
  Vue.component(Tag.name, Tag)
  Vue.component(Alert.name, Alert)
  Vue.component(Modal.name, Modal)

  Vue.prototype.$notification = Notification
  Vue.prototype.$message = Message
  Vue.prototype.$modal = FastModal
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Row,
  Col,
  Icon,
  Button,
  ButtonGroup,
  Input,
  Popper,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Breadcrumb,
  BreadcrumbItem,
  Notification,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Message,
  Select,
  Option,
  OptionGroup,
  Switch,
  Badge,
  Backtop,
  Tag,
  Alert,
  Modal
}
