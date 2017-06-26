import { Row, Col } from './grid'
import { Icon } from './icon'
import { Button, ButtonGroup } from './button'
import { Input } from './input'
import { Popper } from './popper'
import { Dropdown, DropdownMenu, DropdownItem } from './dropdown'
import { Breadcrumb, BreadcrumbItem } from './breadcrumb'
import { Checkbox, CheckboxGroup } from './checkbox'
import { Radio, RadioGroup } from './radio'
import { Select, Option, OptionGroup } from './select'
import { Switch } from './switch'
import { Badge } from './badge'
import { Backtop } from './backtop'
import { Tag } from './tag'
import { Alert } from './alert'
import { Modal, FastModal } from './modal'
import { Form, FormItem } from './form'

import { Notification } from './notification'
import { Message } from './message'
import { Tooltip } from './tooltip'
import { Menu, Submenu, MenuItem, MenuItemGroup } from './menu'

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
  Vue.component(Tooltip.name, Tooltip)
  Vue.component(Menu.name, Menu)
  Vue.component(MenuItem.name, MenuItem)
  Vue.component(Submenu.name, Submenu)
  Vue.component(MenuItemGroup.name, MenuItemGroup)
  Vue.component(Form.name, Form)
  Vue.component(FormItem.name, FormItem)

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
  Modal,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Form,
  FormItem
}
