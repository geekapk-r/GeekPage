// License AGPL-3.0
// Copyright(C) 2018 duangsuse
// GeekApk.org style manager

// should use dark style from 19:00 to 6:00
function shouldApplyDarkStyle() {
  if (localStorage['night'] == 'false')
    return false;
  var dh = new Date();
  nightBegin = localStorage['nightBegin'] || 19
  nightEnd = localStorage['nightEnd'] || 6
  return dh.getHours() >= nightBegin && dh.getHours() <= nightEnd
}

// use dark style
function darkStyle() {
  if (localStorage['noAutoStyleSwitch'] == 'true') return;
  if (localStorage['isDark'] == 'true') return;
  localStorage['lightColorPrimary'] = localStorage['colorPrimary']
  localStorage['lightColorInf'] = localStorage['colorInf']
  localStorage['lightColorHigh'] = localStorage['colorHigh']
  localStorage['lightColorFab'] = localStorage['colorFab']

  localStorage['colorPrimary'] = 'black'
  localStorage['colorInf'] = 'white'
  localStorage['colorHigh'] = 'green'
  localStorage['colorFab'] = 'grey'
  localStorage['isDark'] = 'true'
}

// use user setting
function lightStyle() {
  for (i in ['Primary', 'Inf', 'High', 'Fab']) {
    localStorage['color' + i] = localStorage['lightColor' + i]
  }
  localStorage['isDark'] == 'false'
}

function coloredPrimary(classname) {
  items = document.getElementsByClassName(classname)
  for (i in items) {
    i.style.color = localStorage['colorPrimary']
  }
}

function coloredInf(classname) {
  items = document.getElementsByClassName(classname)
  for (i in items) {
    i.style.color = localStorage['colorInf']
  }
}

function coloredHigh(classname) {
  items = document.getElementsByClassName(classname)
  for (i in items) {
    i.style.color = localStorage['colorHigh']
  }
}

function coloredFab(classname) {
  items = document.getElementsByClassName(classname)
  for (i in items) {
    i.style.color = localStorage['colorFab']
  }
}
