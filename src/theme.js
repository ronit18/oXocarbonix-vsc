const base = {
	colors: {
		brightYellow: '#FA973B',
		brightMint: '#be95ff',
		lowerMint: '#3ddbd9',
		tealGreen: '#3ACECC',
		lowerBlue: '#75A5F8',
		lightBlue: '#ffffff',
		desaturatedBlue: '#77A9FF',
		lightBluishGray: '#78a9ff',
		hotRed: '#ff7eb6',
		pink: '#d093ff',
		lightGray: '#e6e9ef',
		darkerGray: '#525252',
		gray: '#a6accd',
		darkBluishGray: '#393939',
		focus: '#404350',
		bg: '#161616',
		selection: '#818cc440',
		white: '#ffffff',
		black: '#161616',
		transparent: '#00000000',
	},
	styles: {
		fontStyle: 'italic',
	},
};

const storm = {
	...base,
	colors: {
		...base.colors,
		darkerGray: '#767b9d',
		darkBluishGray: '#506377',
		selection: '#818cc435',
		focus: '#404350',
		bg: '#252b37',
		black: '#101010',
	},
};

const twilight = {
	...base,
	colors: {
		...base.colors,

		bluishGray: '#405266',
		darkerGray: '#5d6084',
		selection: '#6c5da430',
		hotRed: '#ff7eb6',
		pink: '#c49ff5',
		focus: '#272a36',
		bg: '#151822',
		black: '#000000',
	},
};

const obsidian = {
	...base,
	colors: {
		...base.colors,
		brightYellow: '#FFB74D',
		brightMint: '#C78FFF',
		lowerMint: '#20CED0',
		tealGreen: '#2DBDC0',
		lowerBlue: '#5B92EE',
		lightBlue: '#F0F5FF',
		desaturatedBlue: '#5597FF',
		lightBluishGray: '#5C91EB',
		hotRed: '#FF6BAA',
		pink: '#DA78FF',
		lightGray: '#D8E0F0',
		darkerGray: '#455166',
		gray: '#8D99B8',
		darkBluishGray: '#262C3F',
		focus: '#252A3D',
		bg: '#141827',
		selection: '#5B92EE30',
		black: '#0D1019',
		white: '#F0F5FF',
	},
};
function schema({ colors, styles }) {
	return `{
    "name": "oXocarbonix dark theme",
    "type": "dark",
    "colors": {
      "activityBar.background": "${colors.bg}",
      "activityBar.foreground": "${colors.lightGray}",
      "activityBarBadge.background": "${colors.focus}",
      "activityBarBadge.foreground": "${colors.lightGray}",
      "badge.background": "${colors.focus}",
      "badge.foreground": "${colors.lightGray}",
      "button.background": "${colors.focus}",
      "diffEditor.insertedTextBackground": "${colors.darkBluishGray}15",
      "diffEditor.removedTextBackground": "${colors.hotRed}20",
      "dropdown.background": "${colors.bg}",
      "dropdown.border": "${colors.white}10",
      "editor.background": "${colors.bg}",
      "editor.findMatchBackground": "${colors.lightBlue}40",
      "editor.findMatchBorder": "${colors.lightBlue}",
      "editor.findMatchHighlightBackground": "${colors.lightBlue}40",
      "editor.foreground": "${colors.lightGray}",
      "editor.lineHighlightBackground": "${colors.selection}",
      "editor.lineHighlightBorder": "${colors.transparent}",
      "editor.selectionBackground": "${colors.selection}",
      "editor.selectionHighlightBackground": "${colors.transparent}",
      "editor.selectionHighlightBorder": "${colors.lightBlue}80",
      "editor.wordHighlightBackground": "${colors.lightBlue}20",
      "editor.wordHighlightStrongBackground": "${colors.lightBlue}40",
      "editorBracketMatch.border": "${colors.lightGray}40",
      "editorCursor.foreground": "${colors.lightGray}",
      "editorGroup.border": "${colors.black}30",
      "editorGroupHeader.tabsBackground": "${colors.bg}",
      "editorHoverWidget.background": "${colors.bg}",
      "editorHoverWidget.border": "${colors.white}10",
      "editorIndentGuide.background1": "${colors.focus}",
      "editorLineNumber.foreground": "${colors.darkerGray}50",
      "editorLink.activeForeground": "${colors.lightBlue}",
      "editorSuggestWidget.background": "${colors.bg}",
      "editorSuggestWidget.border": "${colors.white}10",
      "editorSuggestWidget.foreground": "${colors.lightGray}",
      "editorSuggestWidget.highlightForeground": "${colors.brightMint}",
      "editorSuggestWidget.selectedBackground": "${colors.black}50",
      "editorWidget.background": "${colors.bg}",
      "editor.findRangeHighlightBackground": "${colors.lightBlue}40",
      "editor.focusedStackFrameHighlightBackground": "#7abd7a4d",
      "editor.foldBackground": "#717cb40b",
      "editor.hoverHighlightBackground": "#264f7840",
      "editor.inactiveSelectionBackground": "${colors.selection}",
      "editor.linkedEditingBackground": "${colors.hotRed}4d",
      "editor.rangeHighlightBackground": "${colors.white}0b",
      "editor.snippetFinalTabstopHighlightBorder": "#525252",
      "editor.snippetTabstopHighlightBackground": "#7c7c7c4d",
      "editor.stackFrameHighlightBackground": "#ffff0033",
      "editor.symbolHighlightBackground": "${colors.lowerBlue}60",
      "editorBracketMatch.background": "${colors.transparent}",
      "editorCodeLens.foreground": "${colors.lightGray}",
      "editorError.foreground": "${colors.hotRed}",
      "editorGroup.dropBackground": "${colors.darkBluishGrayBrighter}80",
      "editorGroupHeader.noTabsBackground": "${colors.bg}",
      "editorGutter.background": "${colors.bg}",
      "editorGutter.commentRangeForeground": "${colors.lightGray}",
      "editorGutter.foldingControlForeground": "${colors.lightGray}",
      "editorGutter.addedBackground": "${colors.lowerMint}40",
      "editorGutter.deletedBackground": "${colors.hotRed}40",
      "editorGutter.modifiedBackground": "${colors.lightBlue}20",
      "editorHint.foreground": "${colors.darkBluishGrayBrighter}b3",
      "editorHoverWidget.foreground": "${colors.lightGray}",
      "editorHoverWidget.statusBarBackground": "#202430",
      "editorIndentGuide.activeBackground": "#e3e4e229",
      "editorInfo.foreground": "${colors.lightBlue}",
      "editorInlineHint.background": "${colors.lightGray}",
      "editorInlineHint.foreground": "${colors.bg}",
      "editorLightBulb.foreground": "${colors.brightYellow}",
      "editorLightBulbAutoFix.foreground": "${colors.lightBlue}",
      "editorLineNumber.activeForeground": "${colors.lightGray}",
      "editorMarkerNavigation.background": "#2d2d30",
      "editorMarkerNavigationError.background": "${colors.hotRed}",
      "editorMarkerNavigationInfo.background": "${colors.lightBlue}",
      "editorMarkerNavigationWarning.background": "${colors.brightYellow}",
      "editorOverviewRuler.addedForeground": "${colors.lowerMint}99",
      "editorOverviewRuler.border": "${colors.transparent}",
      "editorOverviewRuler.bracketMatchForeground": "#a0a0a0",
      "editorOverviewRuler.commonContentForeground": "${colors.lightGray}66",
      "editorOverviewRuler.currentContentForeground": "${colors.lowerMint}80",
      "editorOverviewRuler.deletedForeground": "${colors.hotRed}99",
      "editorOverviewRuler.errorForeground": "${colors.hotRed}b3",
      "editorOverviewRuler.findMatchForeground": "${colors.lightGray}20",
      "editorOverviewRuler.incomingContentForeground": "${colors.lowerBlue}80",
      "editorOverviewRuler.infoForeground": "${colors.lightBlue}",
      "editorOverviewRuler.modifiedForeground": "${colors.lowerBlue}99",
      "editorOverviewRuler.rangeHighlightForeground": "${colors.lowerBlue}99",
      "editorOverviewRuler.selectionHighlightForeground": "#a0a0a0cc",
      "editorOverviewRuler.warningForeground": "${colors.brightYellow}",
      "editorOverviewRuler.wordHighlightForeground": "#a0a0a0cc",
      "editorOverviewRuler.wordHighlightStrongForeground": "${colors.lowerBlue}cc",
      "editorPane.background": "${colors.bg}",
      "editorRuler.foreground": "${colors.lightGray}10",
      "editorUnnecessaryCode.opacity": "${colors.black}aa",
      "editorWarning.foreground": "${colors.brightYellow}",
      "editorWhitespace.foreground": "${colors.focus}",
      "editorWidget.border": "${colors.lightGray}",
      "editorWidget.foreground": "${colors.lightGray}",
      "extensionButton.prominentBackground": "${colors.focus}90",
      "extensionButton.prominentHoverBackground": "${colors.focus}",
      "focusBorder": "${colors.transparent}",
      "input.background": "${colors.white}05",
      "input.border": "${colors.white}10",
      "input.foreground": "${colors.lightGray}",
      "input.placeholderForeground": "${colors.lightGray}60",
      "inputValidation.errorBorder": "${colors.hotRed}",
      "inputValidation.errorForeground": "${colors.hotRed}",
      "inputValidation.infoBorder": "${colors.lowerBlue}",
      "inputValidation.warningBorder": "${colors.brightYellow}",
      "notifications.background": "${colors.bg}",
      "notifications.foreground": "${colors.lightGray}",
      "panel.border": "${colors.black}30",
      "panelTitle.activeForeground": "${colors.lightGray}",
      "peekView.border": "${colors.black}30",
      "peekViewEditor.background": "${colors.lightGray}05",
      "peekViewEditorGutter.background": "${colors.lightGray}05",
      "peekViewResult.background": "${colors.lightGray}05",
      "peekViewTitle.background": "${colors.lightGray}05",
      "peekViewTitleDescription.foreground": "${colors.lightGray}60",
      "scrollbar.shadow": "${colors.transparent}",
      "scrollbarSlider.activeBackground": "${colors.gray}25",
      "scrollbarSlider.background": "${colors.black}80",
      "scrollbarSlider.hoverBackground": "${colors.gray}25",
      "selection.background": "${colors.focus}",
      "sideBar.background": "${colors.bg}",
      "sideBar.foreground": "${colors.darkerGray}",
      "sideBarSectionHeader.background": "${colors.bg}",
      "sideBarTitle.foreground": "${colors.lightGray}",
      "statusBar.background": "${colors.bg}",
      "statusBar.foreground": "${colors.lightGray}",
      "statusBar.noFolderBackground": "${colors.bg}",
      "tab.activeBackground": "${colors.focus}80",
      "tab.activeForeground": "${colors.lightGray}",
      "tab.border": "${colors.transparent}",
      "tab.inactiveBackground": "${colors.bg}",
      "tab.inactiveForeground": "${colors.darkerGray}",
      "tab.unfocusedActiveForeground": "${colors.lightGray}",
      "tab.activeModifiedBorder": "${colors.lightBlue}",
      "tab.inactiveModifiedBorder": "${colors.lightBlue}80",
      "tab.lastPinnedBorder": "${colors.transparent}",
      "tab.unfocusedActiveBackground": "${colors.bg}",
      "tab.unfocusedActiveModifiedBorder": "${colors.lightBlue}40",
      "tab.unfocusedInactiveBackground": "${colors.bg}",
      "tab.unfocusedInactiveForeground": "${colors.lightGray}80",
      "tab.unfocusedInactiveModifiedBorder": "${colors.lightBlue}40",      
      "terminal.ansiBlack": "${colors.bg}",
      "terminal.ansiBlue": "${colors.lowerBlue}",
      "terminal.ansiBrightBlack": "${colors.lightGray}",
      "terminal.ansiBrightBlue": "${colors.lightBlue}",
      "terminal.ansiBrightCyan": "${colors.lightBlue}",
      "terminal.ansiBrightGreen": "${colors.brightMint}",
      "terminal.ansiBrightMagenta": "${colors.pink}",
      "terminal.ansiBrightRed": "${colors.hotRed}",
      "terminal.ansiBrightWhite": "${colors.white}",
      "terminal.ansiBrightYellow": "${colors.brightYellow}",
      "terminal.ansiCyan": "${colors.lowerBlue}",
      "terminal.ansiGreen": "${colors.brightMint}",
      "terminal.ansiMagenta": "${colors.pink}",
      "terminal.ansiRed": "${colors.hotRed}",
      "terminal.ansiWhite": "${colors.white}",
      "terminal.ansiYellow": "${colors.brightYellow}",
      "textLink.activeForeground": "${colors.lightBlue}",
      "textLink.foreground": "${colors.lightBlue}",
      "titleBar.activeBackground": "${colors.bg}",
      "titleBar.activeForeground": "${colors.lightGray}",
      "titleBar.inactiveBackground": "${colors.bg}",
      "titleBar.inactiveForeground": "${colors.darkerGray}",
      "tree.indentGuidesStroke": "${colors.focus}",
      "widget.shadow": "${colors.black}30",
      "activityBar.activeBorder": "${colors.lightGray}",
      "activityBar.dropBorder": "${colors.lightGray}",
      "activityBar.inactiveForeground": "${colors.lightGray}66",
      "breadcrumb.activeSelectionForeground": "${colors.lightGray}",
      "breadcrumb.background": "${colors.transparent}",
      "breadcrumb.focusForeground": "${colors.lightGray}",
      "breadcrumb.foreground": "${colors.darkerGray}cc",
      "breadcrumbPicker.background": "${colors.bg}",
      "button.foreground": "${colors.white}",
      "button.hoverBackground": "${colors.darkBluishGray}50",
      "button.secondaryBackground": "${colors.lightGray}",
      "button.secondaryForeground": "${colors.white}",
      "button.secondaryHoverBackground": "${colors.lightGray}",
      "charts.blue": "${colors.lightBlue}",
      "charts.foreground": "${colors.lightGray}",
      "charts.green": "${colors.brightMint}",
      "charts.lines": "${colors.lightGray}80",
      "charts.orange": "${colors.lowerBlue}",
      "charts.purple": "${colors.pink}",
      "charts.red": "${colors.hotRed}",
      "charts.yellow": "${colors.brightYellow}",
      "checkbox.background": "${colors.bg}",
      "checkbox.border": "${colors.white}10",
      "checkbox.foreground": "${colors.lightGray}",
      "debugConsole.errorForeground": "${colors.hotRed}",
      "debugConsole.infoForeground": "${colors.lightBlue}",
      "debugConsole.sourceForeground": "${colors.lightGray}",
      "debugConsole.warningForeground": "${colors.brightYellow}",
      "debugConsoleInputIcon.foreground": "${colors.lightGray}",
      "debugExceptionWidget.background": "${colors.hotRed}",
      "debugExceptionWidget.border": "${colors.hotRed}",
      "debugIcon.breakpointCurrentStackframeForeground": "${colors.brightYellow}",
      "debugIcon.breakpointDisabledForeground": "${colors.darkBluishGrayBrighter}",
      "debugIcon.breakpointForeground": "${colors.hotRed}",
      "debugIcon.breakpointStackframeForeground": "${colors.lowerMint}",
      "debugIcon.breakpointUnverifiedForeground": "${colors.darkBluishGrayBrighter}",
      "debugIcon.continueForeground": "${colors.lightBlue}",
      "debugIcon.disconnectForeground": "${colors.hotRed}",
      "debugIcon.pauseForeground": "${colors.lightBlue}",
      "debugIcon.restartForeground": "${colors.lowerMint}",
      "debugIcon.startForeground": "${colors.lowerMint}",
      "debugIcon.stepBackForeground": "${colors.lightBlue}",
      "debugIcon.stepIntoForeground": "${colors.lightBlue}",
      "debugIcon.stepOutForeground": "${colors.lightBlue}",
      "debugIcon.stepOverForeground": "${colors.lightBlue}",
      "debugIcon.stopForeground": "${colors.hotRed}",
      "debugTokenExpression.boolean": "${colors.lowerBlue}",
      "debugTokenExpression.error": "${colors.hotRed}",
      "debugTokenExpression.name": "${colors.lightGray}",
      "debugTokenExpression.number": "${colors.lowerMint}",
      "debugTokenExpression.string": "${colors.lowerBlue}",
      "debugTokenExpression.value": "${colors.lightGray}99",
      "debugToolBar.background": "${colors.focus}",
      "debugView.exceptionLabelBackground": "${colors.hotRed}",
      "debugView.exceptionLabelForeground": "${colors.lightGray}",
      "debugView.stateLabelBackground": "${colors.focus}",
      "debugView.stateLabelForeground": "${colors.lightGray}",
      "debugView.valueChangedHighlight": "${colors.lowerBlue}",
      "descriptionForeground": "${colors.lightGray}b3",
      "diffEditor.diagonalFill": "${colors.lightGray}33",
      "dropdown.foreground": "${colors.lightGray}",    
      "errorForeground": "${colors.hotRed}",
      "extensionBadge.remoteBackground": "${colors.focus}",
      "extensionBadge.remoteForeground": "${colors.lightGray}",
      "extensionButton.prominentForeground": "${colors.white}",
      "extensionIcon.starForeground": "${colors.brightYellow}",
      "foreground": "${colors.lightGray}",
      "gitDecoration.addedResourceForeground": "${colors.lowerMint}",
      "gitDecoration.conflictingResourceForeground": "${colors.hotRed}",
      "gitDecoration.deletedResourceForeground": "${colors.hotRed}",
      "gitDecoration.ignoredResourceForeground": "${colors.darkerGray}70",
      "gitDecoration.modifiedResourceForeground": "${colors.lowerBlue}",
      "gitDecoration.renamedResourceForeground": "${colors.lightBlue}",
      "gitDecoration.stageDeletedResourceForeground": "${colors.hotRed}",
      "gitDecoration.stageModifiedResourceForeground": "${colors.lowerBlue}",
      "gitDecoration.submoduleResourceForeground": "${colors.lowerBlue}",
      "gitDecoration.untrackedResourceForeground": "${colors.tealGreen}",
      "icon.foreground": "${colors.lightGray}",
      "imagePreview.border": "${colors.focus}",
      "inputOption.activeBackground": "${colors.transparent}",
      "inputOption.activeBorder": "${colors.transparent}",
      "inputOption.activeForeground": "${colors.white}",
      "inputValidation.errorBackground": "${colors.bg}",
      "inputValidation.infoBackground": "${colors.darkBluishGray}",
      "inputValidation.warningBackground": "${colors.darkBluishGray}",
      "list.deemphasizedForeground": "${colors.darkerGray}",
      "list.dropBackground": "${colors.darkBluishGray}",
      "list.filterMatchBackground": "${colors.lowerBlue}60",
      "list.focusOutline": "${colors.transparent}",
      "list.invalidItemForeground": "${colors.brightYellow}",
      "list.warningForeground": "${colors.brightYellow}",
      "listFilterWidget.background": "${colors.focus}",
      "listFilterWidget.noMatchesOutline": "${colors.hotRed}",
      "listFilterWidget.outline": "${colors.transparent}",
      "list.activeSelectionBackground": "${colors.focus}80",
      "list.activeSelectionForeground": "${colors.lightGray}",
      "list.errorForeground": "${colors.hotRed}",
      "list.focusBackground": "${colors.focus}80",
      "list.focusForeground": "${colors.lightGray}",
      "list.highlightForeground": "${colors.lowerMint}",
      "list.hoverBackground": "${colors.focus}80",
      "list.hoverForeground": "${colors.lightGray}",
      "list.inactiveSelectionBackground": "${colors.focus}80",
      "list.inactiveSelectionForeground": "${colors.lightGray}",
      "menu.background": "${colors.bg}",
      "menu.foreground": "${colors.lightGray}",
      "menu.selectionBackground": "${colors.focus}",
      "menu.selectionForeground": "${colors.darkBluishGrayBrighter}",
      "menu.separatorBackground": "${colors.darkerGray}",
      "menubar.selectionBackground": "${colors.selection}",
      "menubar.selectionForeground": "${colors.lightGray}",
      "merge.commonContentBackground": "${colors.lightGray}29",
      "merge.commonHeaderBackground": "${colors.lightGray}66",
      "merge.currentContentBackground": "${colors.lowerMint}33",
      "merge.currentHeaderBackground": "${colors.lowerMint}80",
      "merge.incomingContentBackground": "${colors.lowerBlue}33",
      "merge.incomingHeaderBackground": "${colors.lowerBlue}80",
      "minimap.errorHighlight": "${colors.hotRed}",
      "minimap.findMatchHighlight": "${colors.lightBlue}",
      "minimap.selectionHighlight": "${colors.lightGray}40",
      "minimap.warningHighlight": "${colors.brightYellow}",
      "minimapGutter.addedBackground": "${colors.lowerMint}80",
      "minimapGutter.deletedBackground": "${colors.hotRed}80",
      "minimapGutter.modifiedBackground": "${colors.lightBlue}80",
      "minimapSlider.activeBackground": "${colors.lightGray}30",
      "minimapSlider.background": "${colors.lightGray}20",
      "minimapSlider.hoverBackground": "${colors.lightGray}30",
      "notebook.cellEditorBackground": "${colors.black}",
      "notebook.cellInsertionIndicator": "${colors.bg}",
      "notebook.focusedCellBackground": "${colors.selection}",
      "notebook.selectedCellBackground": "${colors.focus}",
      "notebook.cellHoverBackground": "${colors.selection}",
      "notebook.focusedCellBorder": "${colors.tealGreen}",
      "notebook.selectedCellBorder": "${colors.white}",
      "notebook.inactiveFocusedCellBorder": "${colors.bg}",
      "notebook.outputContainerBackgroundColor": "${colors.focus}",
      "notebookStatusErrorIcon.foreground": "${colors.hotRed}",
      "notebookStatusRunningIcon.foreground": "${colors.lightGray}",
      "notebookStatusSuccessIcon.foreground": "${colors.lowerMint}",
      "notificationCenterHeader.background": "${colors.focus}",
      "notificationLink.foreground": "${colors.lightBlue}",
      "notifications.border": "${colors.focus}",
      "notificationsErrorIcon.foreground": "${colors.hotRed}",
      "notificationsInfoIcon.foreground": "${colors.lightBlue}",
      "notificationsWarningIcon.foreground": "${colors.brightYellow}",
      "panel.background": "${colors.bg}",
      "panel.dropBorder": "${colors.lightGray}",
      "panelSection.border": "${colors.bg}",
      "panelSection.dropBackground": "${colors.darkBluishGrayBrighter}80",
      "panelSectionHeader.background": "${colors.focus}",
      "panelTitle.activeBorder": "${colors.lightGray}",
      "panelTitle.inactiveForeground": "${colors.lightGray}99",
      "peekViewEditor.matchHighlightBackground": "${colors.focus}",
      "peekViewResult.fileForeground": "${colors.white}",
      "peekViewResult.lineForeground": "${colors.lightGray}",
      "peekViewResult.matchHighlightBackground": "${colors.focus}",
      "peekViewResult.selectionBackground": "${colors.selection}",
      "peekViewResult.selectionForeground": "${colors.white}",
      "peekViewTitleLabel.foreground": "${colors.white}",
      "pickerGroup.border": "${colors.lightGray}",
      "pickerGroup.foreground": "${colors.lowerBlue}",
      "problemsErrorIcon.foreground": "${colors.hotRed}",
      "problemsInfoIcon.foreground": "${colors.lightBlue}",
      "problemsWarningIcon.foreground": "${colors.brightYellow}",
      "progressBar.background": "${colors.lowerBlue}",
      "quickInput.background": "${colors.bg}",
      "quickInput.foreground": "${colors.lightGray}",
      "quickInputList.focusBackground": "${colors.lightGray}10",
      "quickInputTitle.background": "${colors.white}1b",
      "sash.hoverBorder": "${colors.transparent}",
      "scm.providerBorder": "${colors.lightGray}10",
      "searchEditor.findMatchBackground": "${colors.lightBlue}50",
      "searchEditor.textInputBorder": "${colors.white}10",
      "settings.checkboxBackground": "${colors.bg}",
      "settings.checkboxBorder": "${colors.white}10",
      "settings.checkboxForeground": "${colors.lightGray}",
      "settings.dropdownBackground": "${colors.bg}",
      "settings.dropdownBorder": "${colors.white}10",
      "settings.dropdownForeground": "${colors.lightGray}",
      "settings.dropdownListBorder": "${colors.lightGray}10",
      "settings.focusedRowBackground": "${colors.transparent}",
      "settings.headerForeground": "${colors.lightGray}",
      "settings.modifiedItemIndicator": "${colors.lightBlue}",
      "settings.numberInputBackground": "${colors.white}05",
      "settings.numberInputBorder": "${colors.white}10",
      "settings.numberInputForeground": "${colors.lightGray}",
      "settings.textInputBackground": "${colors.white}05",
      "settings.textInputBorder": "${colors.white}10",
      "settings.textInputForeground": "${colors.lightGray}",
      "sideBar.dropBackground": "${colors.darkBluishGrayBrighter}80",
      "sideBarSectionHeader.foreground": "${colors.lightGray}",
      "statusBar.debuggingBackground": "${colors.focus}",
      "statusBar.debuggingForeground": "${colors.white}",
      "statusBar.noFolderForeground": "${colors.lightGray}",
      "statusBarItem.activeBackground": "${colors.white}2e",
      "statusBarItem.errorBackground": "${colors.hotRed}",
      "statusBarItem.errorForeground": "${colors.white}",
      "statusBarItem.hoverBackground": "${colors.white}1f",
      "statusBarItem.prominentBackground": "${colors.black}80",
      "statusBarItem.prominentForeground": "${colors.lightGray}",
      "statusBarItem.prominentHoverBackground": "${colors.black}4d",
      "statusBarItem.remoteBackground": "${colors.focus}",
      "statusBarItem.remoteForeground": "${colors.lightGray}",
      "symbolIcon.arrayForeground": "${colors.lightGray}",
      "symbolIcon.booleanForeground": "${colors.lightGray}",
      "symbolIcon.classForeground": "${colors.brightYellow}",
      "symbolIcon.colorForeground": "${colors.lightGray}",
      "symbolIcon.constantForeground": "${colors.lightGray}",
      "symbolIcon.constructorForeground": "${colors.pink}",
      "symbolIcon.enumeratorForeground": "${colors.brightYellow}",
      "symbolIcon.enumeratorMemberForeground": "${colors.lightBlue}",
      "symbolIcon.eventForeground": "${colors.brightYellow}",
      "symbolIcon.fieldForeground": "${colors.lightBlue}",
      "symbolIcon.fileForeground": "${colors.lightGray}",
      "symbolIcon.folderForeground": "${colors.lightGray}",
      "symbolIcon.functionForeground": "${colors.pink}",
      "symbolIcon.interfaceForeground": "${colors.lightBlue}",
      "symbolIcon.keyForeground": "${colors.lightGray}",
      "symbolIcon.keywordForeground": "${colors.lightGray}",
      "symbolIcon.methodForeground": "${colors.pink}",
      "symbolIcon.moduleForeground": "${colors.lightGray}",
      "symbolIcon.namespaceForeground": "${colors.lightGray}",
      "symbolIcon.nullForeground": "${colors.lightGray}",
      "symbolIcon.numberForeground": "${colors.lightGray}",
      "symbolIcon.objectForeground": "${colors.lightGray}",
      "symbolIcon.operatorForeground": "${colors.lightGray}",
      "symbolIcon.packageForeground": "${colors.lightGray}",
      "symbolIcon.propertyForeground": "${colors.lightGray}",
      "symbolIcon.referenceForeground": "${colors.lightGray}",
      "symbolIcon.snippetForeground": "${colors.lightGray}",
      "symbolIcon.stringForeground": "${colors.lightGray}",
      "symbolIcon.structForeground": "${colors.lightGray}",
      "symbolIcon.textForeground": "${colors.lightGray}",
      "symbolIcon.typeParameterForeground": "${colors.lightGray}",
      "symbolIcon.unitForeground": "${colors.lightGray}",
      "symbolIcon.variableForeground": "${colors.lightBlue}",
      "terminal.border": "${colors.transparent}",
      "terminal.foreground": "${colors.lightGray}",
      "terminal.selectionBackground": "${colors.selection}",
      "terminalCommandDecoration.errorBackground": "${colors.hotRed}",
      "terminalCommandDecoration.successBackground": "${colors.brightMint}",
      "terminalCommandDecoration.defaultBackground": "${colors.darkerGray}",
      "testing.iconErrored": "${colors.hotRed}",
      "testing.iconFailed": "${colors.hotRed}",
      "testing.iconPassed": "${colors.brightMint}",
      "testing.iconQueued": "${colors.brightYellow}",
      "testing.iconSkipped": "${colors.darkBluishGrayBrighter}",
      "testing.iconUnset": "${colors.darkBluishGrayBrighter}",
      "testing.message.error.decorationForeground": "${colors.hotRed}",
      "testing.message.error.lineBackground": "${colors.hotRed}33",
      "testing.message.hint.decorationForeground": "${colors.darkBluishGrayBrighter}b3",
      "testing.message.info.decorationForeground": "${colors.lightBlue}",
      "testing.message.info.lineBackground": "${colors.lowerBlue}33",
      "testing.message.warning.decorationForeground": "${colors.brightYellow}",
      "testing.message.warning.lineBackground": "${colors.brightYellow}33",
      "testing.peekBorder": "${colors.hotRed}",
      "testing.runAction": "${colors.brightMint}",
      "textBlockQuote.background": "${colors.darkBluishGrayBrighter}1a",
      "textBlockQuote.border": "${colors.lowerBlue}80",
      "textCodeBlock.background": "${colors.black}50",
      "textPreformat.foreground": "${colors.lightGray}",
      "textSeparator.foreground": "${colors.white}2e",
      "tree.tableColumnsBorder": "${colors.lightGray}20",
      "welcomePage.progress.background": "${colors.white}05",
      "welcomePage.progress.foreground": "${colors.lowerMint}",
      "welcomePage.tileBackground": "${colors.bg}",
      "welcomePage.tileHoverBackground": "${colors.focus}"
    },
    "tokenColors": [
      {
        "scope": ["comment", "punctuation.definition.comment","string.quoted.docstring.multi"],
        "settings": {
          "foreground": "${colors.darkerGray}B0",
          "fontStyle": "${styles.fontStyle}"
        }
      },
      {
        "scope": ["meta.parameters comment.block"],
        "settings": {
          "foreground": "${colors.lightGray}",
          "fontStyle": "${styles.fontStyle}"
        }
      },
      {
        "scope": ["variable.other.constant.object", "variable.other.readwrite.alias", "meta.import variable.other.readwrite"],
        "settings": {
          "foreground": "${colors.lightBlue}"
        }
      },
      {
        "scope": ["variable.other", "support.type.object"],
        "settings": {
          "foreground": "${colors.lightGray}"
        }
      },
      {
        "scope": ["variable.other.object.property", "variable.other.property", "support.variable.property"],
        "settings": {
          "foreground": "${colors.lightGray}"
        }
      },
      {
        "scope": ["entity.name.function.method", "string.unquoted", "meta.object.member"],
        "settings": {
          "foreground": "${colors.lightBlue}"
        }
      },
      {
        "scope": ["variable - meta.import", "constant.other.placeholder", "meta.object-literal.key-meta.object.member"],
        "settings": {
          "foreground": "${colors.lightGray}"
        }
      },
      {
        "scope": ["keyword.control.flow"],
        "settings": {
          "foreground": "${colors.lowerMint}c0",
           "fontStyle": "italic"
        }
      },
      {
        "scope": ["keyword.operator.new", "keyword.control.new"],
        "settings": {
          "foreground": "${colors.brightMint}"
        }
      },
      {
        "scope": [
          "variable.language.this", "storage.modifier.async", "storage.modifier", "variable.language.super"
        ],
        "settings": {
          "foreground": "${colors.brightMint}"
        }
      },
      {
        "scope": [         
          "support.class.error", 
          "keyword.control.trycatch", 
          "keyword.operator.expression.delete", 
          "keyword.operator.expression.void", 
          "keyword.operator.void", 
          "keyword.operator.delete",
          "constant.language.null",
          "constant.language.boolean.false",
          "constant.language.undefined"
        ],
        "settings": {
          "foreground": "${colors.hotRed}"
        }
      },
      {
        "scope": ["variable.parameter", "variable.other.readwrite.js", "meta.definition.variable variable.other.constant", "meta.definition.variable variable.other.readwrite"],
        "settings": {
          "foreground": "${colors.lightGray}"
        }
      },
      {
        "scope": ["constant.other.color"],
        "settings": {
          "foreground": "${colors.white}"
        }
      },
      {
        "scope": ["invalid", "invalid.illegal"],
        "settings": {
          "foreground": "${colors.hotRed}"
        }
      },
      {
        "scope": ["invalid.deprecated"],
        "settings": {
          "foreground": "${colors.hotRed}"
        }
      },
      {
        "scope": ["keyword.control", "keyword"],
        "settings": {
          "foreground": "${colors.lightGray}"
        }
      },
      {
        "scope": ["keyword.operator", "storage.type"],
        "settings": {
          "foreground": "${colors.desaturatedBlue}"
        }
      },
      {
        "scope": ["keyword.control.module", "keyword.control.import", "keyword.control.export", "keyword.control.default", "meta.import", "meta.export"],
        "settings": {
          "foreground": "${colors.brightMint}"
        }
      },
      {
        "scope": ["Keyword", "Storage"],
        "settings": {
          "fontStyle": "${styles.fontStyle}"
        }
      },
      {
        "scope": ["keyword-meta.export"],
        "settings": {
          "foreground": "${colors.lightBlue}"
        }
      },
      {
        "scope": ["meta.brace", "punctuation", "keyword.operator.existential"],
        "settings": {
          "foreground": "${colors.lightGray}"
        }
      },
      {
        "scope": [
          "constant.other.color",          
          "meta.tag",
          "punctuation.definition.tag",
          "punctuation.separator.inheritance.php",
          "punctuation.definition.tag.html",
          "punctuation.section.embedded",
          "keyword.other.template",
          "keyword.other.substitution",
          "meta.objectliteral"
        ],
        "settings": {
          "foreground": "${colors.lightGray}"
        }
      },
      {
        "scope": ["punctuation.definition.tag.begin.html", "punctuation.definition.tag.end.html"],
        "settings": {
          "foreground": "${colors.lightGray}"
        }
      },
      {
        "scope": ["support.class.component"],
        "settings": {
          "foreground": "${colors.brightMint}"
        }
      },
      {
        "scope": ["entity.name.tag", "entity.name.tag", "meta.tag.sgml", "markup.deleted.git_gutter"],
        "settings": {
          "foreground": "${colors.brightMint}"
        }
      },
      {
        "name": "User-defined Function Call",
        "scope": "variable.function, meta.class meta.group.braces.curly meta.function-call variable.function, meta.block meta.var.expr meta.function-call entity.name.function",
        "settings": {
          "foreground": "${colors.tealGreen}",
          "fontStyle": "bold"
        }
      },
      
      {
        "name": "Predefined Function Call",
        "scope": "support.function.console, meta.function-call support.function, source meta.method-call entity.name.function, source meta.function-call entity.name.function, meta.class meta.field.declaration meta.function-call entity.name.function, variable.function.constructor",
        "settings": {
          "foreground": "${colors.lightGray}"
        }
      },
      {
        "name": "Function/Class Name",
        "scope": "entity.name.function, meta.class entity.name.class, meta.class entity.name.type.class, meta.class meta.function-call variable.function, keyword.other.important",
        "settings": {
          "foreground": "${colors.lightBlue}"
        }
      },
      {
        "scope": ["source.cpp meta.block variable.other"],
        "settings": {
          "foreground": "${colors.lightBlue}"
        }
      },
      {
        "scope": ["support.other.variable", "string.other.link"],
        "settings": {
          "foreground": "${colors.brightMint}"
        }
      },
      {
        "scope": [
          "constant.numeric",
          "support.constant",
          "constant.character",
          "constant.escape",          
          "keyword.other.unit",
          "keyword.other",
          "string",
          "constant.language",
          "constant.other.symbol",
          "constant.other.key",
          "markup.heading",
          "markup.inserted.git_gutter",
          "meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js"
        ],
        "settings": {
          "foreground": "${colors.brightMint}"
        }
      },
      {
        "scope": ["text.html.derivative"],
        "settings": {
          "foreground": "${colors.lightGray}"
        }
      },
      {
        "scope": ["entity.other.inherited-class"],
        "settings": {
          "foreground": "${colors.lightBlue}"
        }
      },
      {
        "scope": ["meta.type.declaration"],
        "settings": {
          "foreground": "${colors.lightBlue}"
        }
      },
      {
        "scope": ["entity.name.type.alias"],
        "settings": {
          "foreground": "${colors.lightGray}"
        }
      },
      {
        "scope": ["keyword.control.as", "entity.name.type", "support.type"],
        "settings": {
          "foreground": "${colors.lightGray}C0"
        }
      },
      {
        "scope": [
          "entity.name",          
          "support.orther.namespace.use.php",
          "meta.use.php",
          "support.other.namespace.php",
          "markup.changed.git_gutter",
          "support.type.sys-types"
        ],
        "settings": {
          "foreground": "${colors.desaturatedBlue}"
        }
      },
      {
        "scope": ["support.class", "support.constant", "variable.other.constant.object"],
        "settings": {
          "foreground": "${colors.lightBlue}"
        }
      },
      {
        "scope": [
          "source.css support.type.property-name",
          "source.sass support.type.property-name",
          "source.scss support.type.property-name",
          "source.less support.type.property-name",
          "source.stylus support.type.property-name",
          "source.postcss support.type.property-name"
        ],
        "settings": {
          "foreground": "${colors.lightBlue}"
        }
      },
      {
        "scope": ["entity.name.module.js", "variable.import.parameter.js", "variable.other.class.js"],
        "settings": {
          "foreground": "${colors.lightGray}"
        }
      },
      {
        "scope": ["variable.language"],
        "settings": {
          "foreground": "${colors.lightBlue}",
          "fontStyle": "${styles.fontStyle}"
        }
      },
      {
        "scope": ["entity.name.method.js"],
        "settings": {
          "foreground": "${colors.desaturatedBlue}",
          "fontStyle": "${styles.fontStyle}"
        }
      },
      {
        "scope": ["meta.class-method.js entity.name.function.js", "variable.function.constructor"],
        "settings": {
          "foreground": "${colors.desaturatedBlue}",
           "fontStyle": "bold"
        }
      },
      {
        "scope": ["entity.other.attribute-name"],
        "settings": {
          "foreground": "${colors.desaturatedBlue}",
          "fontStyle": "${styles.fontStyle}"
        }
      },
      {
        "scope": ["text.html.basic entity.other.attribute-name.html", "text.html.basic entity.other.attribute-name"],
        "settings": {
          "foreground": "${colors.lowerMint}",
          "fontStyle": "${styles.fontStyle}"
        }
      },
      {
        "scope": ["entity.other.attribute-name.class"],
        "settings": {
          "foreground": "${colors.lowerMint}"
        }
      },
      {
        "scope": ["source.sass keyword.control"],
        "settings": {
          "foreground": "${colors.tealGreen}"
        }
      },
      {
        "scope": ["markup.inserted"],
        "settings": {
          "foreground": "${colors.lightBlue}"
        }
      },
      {
        "scope": ["markup.deleted"],
        "settings": {
          "foreground": "${colors.darkBluishGray}"
        }
      },
      {
        "scope": ["markup.changed"],
        "settings": {
          "foreground": "${colors.desaturatedBlue}"
        }
      },
      {
        "scope": ["string.regexp"],
        "settings": {
          "foreground": "${colors.lowerMint}"
        }
      },
      {
        "scope": ["constant.character.escape"],
        "settings": {
          "foreground": "${colors.lowerMint}"
        }
      },
      {
        "scope": ["*url*", "*link*", "*uri*"],
        "settings": {
          "foreground": "${colors.lightBlue}",
          "fontStyle": "underline"
        }
      },
      {
        "scope": ["tag.decorator.js entity.name.tag.js", "tag.decorator.js punctuation.definition.tag.js"],
        "settings": {
          "foreground": "${colors.tealGreen}",
          "fontStyle": "${styles.fontStyle}"
        }
      },
      {
        "scope": ["source.js constant.other.object.key.js string.unquoted.label.js"],
        "settings": {
          "foreground": "${colors.lowerMint}",
          "fontStyle": "${styles.fontStyle}"
        }
      },
      {
        "scope": ["source.json meta.structure.dictionary.json support.type.property-name.json"],
        "settings": {
          "foreground": "${colors.lightGray}"
        }
      },
      {
        "scope": [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        "settings": {
          "foreground": "${colors.lightBlue}"
        }
      },
      {
        "scope": [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        "settings": {
          "foreground": "${colors.desaturatedBlue}"
        }
      },
      {
        "scope": [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        "settings": {
          "foreground": "${colors.darkBluishGrayBrighter}"
        }
      },
      {
        "scope": [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        "settings": {
          "foreground": "${colors.lightGray}"
        }
      },
      {
        "scope": [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        "settings": {
          "foreground": "${colors.lightBlue}"
        }
      },
      {
        "scope": [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        "settings": {
          "foreground": "${colors.desaturatedBlue}"
        }
      },
      {
        "scope": [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        "settings": {
          "foreground": "${colors.darkBluishGrayBrighter}"
        }
      },
      {
        "scope": [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        "settings": {
          "foreground": "${colors.lightGray}"
        }
      },
      {
        "scope": ["text.html.markdown", "punctuation.definition.list_item.markdown"],
        "settings": {
          "foreground": "${colors.lightGray}"
        }
      },
      {
        "scope": ["text.html.markdown markup.inline.raw.markdown"],
        "settings": {
          "foreground": "${colors.lightBlue}"
        }
      },
      {
        "scope": ["text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown"],
        "settings": {
          "foreground": "${colors.desaturatedBlue}"
        }
      },
      {
        "scope": [
          "markdown.heading",
          "markup.heading | markup.heading entity.name",
          "markup.heading.markdown punctuation.definition.heading.markdown"
        ],
        "settings": {
          "foreground": "${colors.lightGray}"
        }
      },
      {
        "scope": ["markup.italic"],
        "settings": {
          "foreground": "${colors.darkBluishGrayBrighter}",
          "fontStyle": "${styles.fontStyle}"
        }
      },
      {
        "scope": ["markup.bold", "markup.bold string"],
        "settings": {
          "foreground": "${colors.darkBluishGrayBrighter}",
          "fontStyle": "bold"
        }
      },
      {
        "scope": [
          "markup.bold markup.italic",
          "markup.italic markup.bold",
          "markup.quote markup.bold",
          "markup.bold markup.italic string",
          "markup.italic markup.bold string",
          "markup.quote markup.bold string"
        ],
        "settings": {
          "foreground": "${colors.darkBluishGrayBrighter}",
          "fontStyle": "bold"
        }
      },
      {
        "scope": ["markup.underline"],
        "settings": {
          "foreground": "${colors.darkBluishGrayBrighter}",
          "fontStyle": "underline"
        }
      },
      {
        "scope": ["markup.strike"],
        "settings": {
          "fontStyle": "${styles.fontStyle}"
        }
      },
      {
        "scope": ["markup.quote punctuation.definition.blockquote.markdown"],
        "settings": {
          "foreground": "${colors.brightMint}"
        }
      },
      {
        "scope": ["markup.quote"],
        "settings": {
          "fontStyle": "${styles.fontStyle}"
        }
      },
      {
        "scope": ["string.other.link.title.markdown"],
        "settings": {
          "foreground": "${colors.lightBlue}"
        }
      },
      {
        "scope": ["string.other.link.description.title.markdown"],
        "settings": {
          "foreground": "${colors.lightBlue}"
        }
      },
      {
        "scope": ["constant.other.reference.link.markdown"],
        "settings": {
          "foreground": "${colors.lightBlue}"
        }
      },
      {
        "scope": ["markup.raw.block"],
        "settings": {
          "foreground": "${colors.lightBlue}"
        }
      },
      {
        "scope": ["markup.raw.block.fenced.markdown"],
        "settings": {
          "foreground": "${colors.darkBluishGray}50"
        }
      },
      {
        "scope": ["punctuation.definition.fenced.markdown"],
        "settings": {
          "foreground": "${colors.darkBluishGray}50"
        }
      },
      {
        "scope": [
          "markup.raw.block.fenced.markdown",
          "variable.language.fenced.markdown",
          "punctuation.section.class.end"
        ],
        "settings": {
          "foreground": "${colors.desaturatedBlue}"
        }
      },
      {
        "scope": ["variable.language.fenced.markdown"],
        "settings": {
          "foreground": "${colors.desaturatedBlue}"
        }
      },
      {
        "scope": ["meta.separator"],
        "settings": {
          "foreground": "${colors.darkBluishGrayBrighter}",
          "fontStyle": "bold"
        }
      },
      {
        "scope": ["markup.table"],
        "settings": {
          "foreground": "${colors.lightBlue}"
        }
      },
      {
        "scope": "token.info-token",
        "settings": {
          "foreground": "${colors.lowerBlue}"
        }
      },
      {
        "scope": "token.warn-token",
        "settings": {
          "foreground": "${colors.brightYellow}"
        }
      },
      {
        "scope": "token.error-token",
        "settings": {
          "foreground": "${colors.hotRed}"
        }
      },
      {
        "scope": "token.debug-token",
        "settings": {
          "foreground": "${colors.lightGray}"
        }
      },
      {
        "scope": ["entity.name.section.markdown", "markup.heading.setext.1.markdown", "markup.heading.setext.2.markdown"],
        "settings": {
          "foreground": "${colors.lightGray}",
          "fontStyle": "bold"
        }
      },
      {
        "scope": "meta.paragraph.markdown",
        "settings": {
          "foreground": "${colors.lightGray}d0"
        }
      },
      {
        "scope": ["punctuation.definition.from-file.diff", "meta.diff.header.from-file"],
        "settings": {
          "foreground": "${colors.darkBluishGray}"
        }
      },
      {
        "scope": "markup.inline.raw.string.markdown",
        "settings": {
          "foreground": "${colors.darkBluishGrayBrighter}"
        }
      },
      {
        "scope": "meta.separator.markdown",
        "settings": {
          "foreground": "${colors.darkerGray}"
        }
      },
      {
        "scope": "markup.bold.markdown",
        "settings": {
          "fontStyle": "bold"
        }
      },
      {
        "scope": "markup.italic.markdown",
        "settings": {
          "fontStyle": "${styles.fontStyle}"
        }
      },
      {
        "scope": [
          "beginning.punctuation.definition.list.markdown",
          "punctuation.definition.list.begin.markdown",
          "markup.list.unnumbered.markdown"
        ],
        "settings": {
          "foreground": "${colors.lightBlue}"
        }
      },
      {
        "scope": [
          "string.other.link.description.title.markdown punctuation.definition.string.markdown",
          "meta.link.inline.markdown string.other.link.description.title.markdown",
          "string.other.link.description.title.markdown punctuation.definition.string.begin.markdown",
          "string.other.link.description.title.markdown punctuation.definition.string.end.markdown",
          "meta.image.inline.markdown string.other.link.description.title.markdown"
        ],
        "settings": {
          "foreground": "${colors.lightBlue}",
          "fontStyle": ""
        }
      },
      {
        "name": "String Quotes",
        "scope": "punctuation.definition.string",
        "settings": {
          "foreground": "${colors.gray}"
        }
      },
      {
        "name": "Colon Separator",
        "scope": "punctuation.separator.colon",
        "settings": {
          "foreground": "${colors.gray}"
        }
      },
      {
        "name": "Single Quote Delimiters",
        "scope": "punctuation.definition.string.begin, punctuation.definition.string.end",
        "settings": {
          "foreground": "${colors.gray}"
        }
      },
      {
        "name": "Comma Separator",
        "scope": "punctuation.separator.comma",
        "settings": {
          "foreground": "${colors.gray}"
        }
      },
      {
        "name": "Arrow Operator",
        "scope": "punctuation.operator.arrow, punctuation.separator.arrow",
        "settings": {
          "foreground": "${colors.gray}"
        }
      },
      {
        "name": "Arrow Operator",
        "scope": "punctuation.operator.arrow, punctuation.separator.arrow",
        "settings": {
          "foreground": "${colors.gray}"
        }
      },
      {
        "scope": [
          "meta.link.inline.markdown string.other.link.title.markdown",
          "meta.link.reference.markdown string.other.link.title.markdown",
          "meta.link.reference.def.markdown markup.underline.link.markdown"
        ],
        "settings": {
          "foreground": "${colors.lightBlue}",
          "fontStyle": "underline"
        }
      },
      {
        "scope": ["markup.underline.link.markdown", "string.other.link.description.title.markdown"],
        "settings": {
          "foreground": "${colors.brightMint}"
        }
      },
      {
        "scope": ["fenced_code.block.language", "markup.inline.raw.markdown"],
        "settings": {
          "foreground": "${colors.lightBlue}"
        }
      },
      {
        "scope": [
          "punctuation.definition.markdown",
          "punctuation.definition.raw.markdown",
          "punctuation.definition.heading.markdown",
          "punctuation.definition.bold.markdown",
          "punctuation.definition.italic.markdown"
        ],
        "settings": {
          "foreground": "${colors.lightBlue}"
        }
      },
      {
        "scope": ["source.ignore", "log.error", "log.exception"],
        "settings": {
          "foreground": "${colors.hotRed}"
        }
      },
      {
        "scope": ["log.verbose"],
        "settings": {
          "foreground": "${colors.lightGray}"
        }
      }
    ]
  }
  `;
}

function svg({ colors }) {
	const circle = (color, i) => `
    <circle
      r="4"
      cy="${Math.ceil((i + 1) / 4) * 10}"
      cx="${((i % 4) + 1) * 10}"
      fill="${color}"
    />`;
	return `
  <svg width="200" height="250" viewBox="0 0 50 ${
		Math.ceil(Object.keys(colors).length / 4) * 12
  }" xmlns="http://www.w3.org/2000/svg">
    ${Object.values(colors).map(circle).join('')}
  </svg>
  `;
}

module.exports.schema = schema;
module.exports.base = base;
module.exports.storm = storm;
module.exports.twilight = twilight;
module.exports.obsidian = obsidian;
module.exports.svg = svg;
