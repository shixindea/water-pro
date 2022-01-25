/* eslint-disable @typescript-eslint/consistent-type-imports */
declare module 'vue' {
  export interface GlobalComponents {
    AAffix: typeof import('../components/index')['Affix'];

    AAlert: typeof import('../components/index')['Alert'];

    AAnchor: typeof import('../components/index')['Anchor'];

    AAnchorLink: typeof import('../components/index')['AnchorLink'];

    AAutoComplete: typeof import('../components/index')['AutoComplete'];

    AAutoCompleteOptGroup: typeof import('../components/index')['AutoCompleteOptGroup'];

    AAutoCompleteOption: typeof import('../components/index')['AutoCompleteOption'];

    AAvatar: typeof import('../components/index')['Avatar'];

    AAvatarGroup: typeof import('../components/index')['AvatarGroup'];

    ABackTop: typeof import('../components/index')['BackTop'];

    ABadge: typeof import('../components/index')['Badge'];

    ABadgeRibbon: typeof import('../components/index')['BadgeRibbon'];

    ABreadcrumb: typeof import('../components/index')['Breadcrumb'];

    ABreadcrumbItem: typeof import('../components/index')['BreadcrumbItem'];

    ABreadcrumbSeparator: typeof import('../components/index')['BreadcrumbSeparator'];

    AButton: typeof import('../components/index')['Button'];

    AButtonGroup: typeof import('../components/index')['ButtonGroup'];

    ACalendar: typeof import('../components/index')['Calendar'];

    ACard: typeof import('../components/index')['Card'];

    ACardGrid: typeof import('../components/index')['CardGrid'];

    ACardMeta: typeof import('../components/index')['CardMeta'];

    ACarousel: typeof import('../components/index')['Carousel'];

    ACascader: typeof import('../components/index')['Cascader'];

    ACheckableTag: typeof import('../components/index')['CheckableTag'];

    ACheckbox: typeof import('../components/index')['Checkbox'];

    ACheckboxGroup: typeof import('../components/index')['CheckboxGroup'];

    ACol: typeof import('../components/index')['Col'];

    ACollapse: typeof import('../components/index')['Collapse'];

    ACollapsePanel: typeof import('../components/index')['CollapsePanel'];

    AComment: typeof import('../components/index')['Comment'];

    AConfigProvider: typeof import('../components/index')['ConfigProvider'];

    ADatePicker: typeof import('../components/index')['DatePicker'];

    ADescriptions: typeof import('../components/index')['Descriptions'];

    ADescriptionsItem: typeof import('../components/index')['DescriptionsItem'];

    ADirectoryTree: typeof import('../components/index')['DirectoryTree'];

    ADivider: typeof import('../components/index')['Divider'];

    ADrawer: typeof import('../components/index')['Drawer'];

    ADropdown: typeof import('../components/index')['Dropdown'];

    ADropdownButton: typeof import('../components/index')['DropdownButton'];

    AEmpty: typeof import('../components/index')['Empty'];

    AForm: typeof import('../components/index')['Form'];

    AFormItem: typeof import('../components/index')['FormItem'];

    AFormItemRest: typeof import('../components/index')['FormItemRest'];

    AImage: typeof import('../components/index')['Image'];

    AImagePreviewGroup: typeof import('../components/index')['ImagePreviewGroup'];

    AInput: typeof import('../components/index')['Input'];

    AInputGroup: typeof import('../components/index')['InputGroup'];

    AInputNumber: typeof import('../components/index')['InputNumber'];

    AInputPassword: typeof import('../components/index')['InputPassword'];

    AInputSearch: typeof import('../components/index')['InputSearch'];

    ALayout: typeof import('../components/index')['Layout'];

    ALayoutContent: typeof import('../components/index')['LayoutContent'];

    ALayoutFooter: typeof import('../components/index')['LayoutFooter'];

    ALayoutHeader: typeof import('../components/index')['LayoutHeader'];

    ALayoutSider: typeof import('../components/index')['LayoutSider'];

    AList: typeof import('../components/index')['List'];

    AListItem: typeof import('../components/index')['ListItem'];

    AListItemMeta: typeof import('../components/index')['ListItemMeta'];

    ALocaleProvider: typeof import('../components/index')['LocaleProvider'];

    AMentions: typeof import('../components/index')['Mentions'];

    AMentionsOption: typeof import('../components/index')['MentionsOption'];

    AMenu: typeof import('../components/index')['Menu'];

    AMenuDivider: typeof import('../components/index')['MenuDivider'];

    AMenuItem: typeof import('../components/index')['MenuItem'];

    AMenuItemGroup: typeof import('../components/index')['MenuItemGroup'];

    AModal: typeof import('../components/index')['Modal'];

    AMonthPicker: typeof import('../components/index')['MonthPicker'];

    APageHeader: typeof import('../components/index')['PageHeader'];

    APagination: typeof import('../components/index')['Pagination'];

    APopconfirm: typeof import('../components/index')['Popconfirm'];

    APopover: typeof import('../components/index')['Popover'];

    AProgress: typeof import('../components/index')['Progress'];

    AQuarterPicker: typeof import('../components/index')['QuarterPicker'];

    ARadio: typeof import('../components/index')['Radio'];

    ARadioButton: typeof import('../components/index')['RadioButton'];

    ARadioGroup: typeof import('../components/index')['RadioGroup'];

    ARangePicker: typeof import('../components/index')['RangePicker'];

    ARate: typeof import('../components/index')['Rate'];

    AResult: typeof import('../components/index')['Result'];

    ARow: typeof import('../components/index')['Row'];

    ASelect: typeof import('../components/index')['Select'];

    ASelectOptGroup: typeof import('../components/index')['SelectOptGroup'];

    ASelectOption: typeof import('../components/index')['SelectOption'];

    ASkeleton: typeof import('../components/index')['Skeleton'];

    ASkeletonAvatar: typeof import('../components/index')['SkeletonAvatar'];

    ASkeletonButton: typeof import('../components/index')['SkeletonButton'];

    ASkeletonImage: typeof import('../components/index')['SkeletonImage'];

    ASkeletonInput: typeof import('../components/index')['SkeletonInput'];

    ASlider: typeof import('../components/index')['Slider'];

    ASpace: typeof import('../components/index')['Space'];

    ASpin: typeof import('../components/index')['Spin'];

    AStatistic: typeof import('../components/index')['Statistic'];

    AStatisticCountdown: typeof import('../components/index')['StatisticCountdown'];

    AStep: typeof import('../components/index')['Step'];

    ASteps: typeof import('../components/index')['Steps'];

    ASubMenu: typeof import('../components/index')['SubMenu'];

    ASwitch: typeof import('../components/index')['Switch'];

    ATabPane: typeof import('../components/index')['TabPane'];

    ATable: typeof import('../components/index')['Table'];

    ATableColumn: typeof import('../components/index')['TableColumn'];

    ATableColumnGroup: typeof import('../components/index')['TableColumnGroup'];

    ATableSummary: typeof import('../components/index')['TableSummary'];

    ATableSummaryCell: typeof import('../components/index')['TableSummaryCell'];

    ATableSummaryRow: typeof import('../components/index')['TableSummaryRow'];

    ATabs: typeof import('../components/index')['Tabs'];

    ATag: typeof import('../components/index')['Tag'];

    ATextarea: typeof import('../components/index')['Textarea'];

    ATimePicker: typeof import('../components/index')['TimePicker'];

    ATimeRangePicker: typeof import('../components/index')['TimeRangePicker'];

    ATimeline: typeof import('../components/index')['Timeline'];

    ATimelineItem: typeof import('../components/index')['TimelineItem'];

    ATooltip: typeof import('../components/index')['Tooltip'];

    ATransfer: typeof import('../components/index')['Transfer'];

    ATree: typeof import('../components/index')['Tree'];

    ATreeNode: typeof import('../components/index')['TreeNode'];

    ATreeSelect: typeof import('../components/index')['TreeSelect'];

    ATreeSelectNode: typeof import('../components/index')['TreeSelectNode'];

    ATypography: typeof import('../components/index')['Typography'];

    ATypographyLink: typeof import('../components/index')['TypographyLink'];

    ATypographyParagraph: typeof import('../components/index')['TypographyParagraph'];

    ATypographyText: typeof import('../components/index')['TypographyText'];

    ATypographyTitle: typeof import('../components/index')['TypographyTitle'];

    AUpload: typeof import('../components/index')['Upload'];

    AUploadDragger: typeof import('../components/index')['UploadDragger'];

    AWeekPicker: typeof import('../components/index')['WeekPicker'];
  }
}
export {};
