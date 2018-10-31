function setUpBlock() {
  Blockly.Blocks['beaver1'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("海狸[1]");
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['beaver2'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("海狸[2]");
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['beaver3'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("海狸[3]");
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['monkey'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("猴子");
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['step'] = {
    init: function() {
      this.appendValueInput("object")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("走");
      this.appendValueInput("step_number")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("步");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['beaver1'] = (block) => 'beaver1';
  Blockly.JavaScript['beaver2'] = (block) => 'beaver2';
  Blockly.JavaScript['beaver3'] = (block) => 'beaver3';
  Blockly.JavaScript['monkey'] = (block) => 'monkey';
  Blockly.JavaScript['step'] = (block) => {
    try {
      const object = Blockly.JavaScript.statementToCode(block, 'object', Blockly.JavaScript.ORDER_ATOMIC).trim().replace(/^'/,"").replace(/'$/,"")
      const num = Blockly.JavaScript.valueToCode(block, 'step_number', Blockly.JavaScript.ORDER_ATOMIC);
      return `diveLinker.Send(parseInt(diveState['${object}']['move']['diveID']),${num});`;
    }
    catch (e) {
      const object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_ATOMIC).trim()
      const num = Blockly.JavaScript.valueToCode(block, 'step_number', Blockly.JavaScript.ORDER_ATOMIC);
      return `diveLinker.Send(parseInt(diveState[${object}]['move']['diveID']),${num});`;
    }
  };
}

const diveState = {
  'beaver1': {
    move: {
      diveID: '1511104738945',
      value: ''
    }
  },
  'beaver2': {
    move: {
      diveID: '1537944625494',
      value: ''
    }
  },
  'beaver3': {
    move: {
      diveID: '1537944821904',
      value: ''
    }
  },
  'monkey': {
    move: {
      diveID: '1511104362549',
      value: ''
    }
  }
};

const xml = `<xml xmlns="http://www.w3.org/1999/xhtml" id="toolbox" style="display: none;">
<category name="語意">
<block type="beaver1"></block>
<block type="beaver2"></block>
<block type="beaver3"></block>
<block type="monkey"></block>
<block type="step"></block>
</category>
<category name="邏輯">
  <block type="controls_if"></block>
  <block type="logic_compare">
    <field name="OP">EQ</field>
  </block>
  <block type="logic_operation">
    <field name="OP">AND</field>
  </block>
  <block type="logic_boolean">
    <field name="BOOL">TRUE</field>
  </block>
</category>
<category name="迴圈">
  <block type="controls_whileUntil">
    <field name="MODE">WHILE</field>
  </block>
  <block type="controls_repeat_ext">
    <value name="TIMES">
      <shadow type="math_number">
        <field name="NUM">10</field>
      </shadow>
    </value>
    <statement name="DO">
      <block type="controls_flow_statements">
        <field name="FLOW">BREAK</field>
      </block>
    </statement>
  </block>
  <block type="controls_forEach">
    <field name="VAR" id="Lq(*:4#{IgmuKrnt*/yw" variabletype="">i</field>
  </block>
  <block type="controls_repeat_ext">
    <value name="TIMES">
      <shadow type="math_number">
        <field name="NUM">10</field>
      </shadow>o0
    </value>
  </block>
</category>
<category name="數學">
  <block type="math_number">
    <field name="NUM">0</field>
  </block>
  <block type="math_arithmetic">
    <field name="OP">ADD</field>
    <value name="A">
      <shadow type="math_number">
        <field name="NUM">1</field>
      </shadow>
    </value>
    <value name="B">
      <shadow type="math_number">
        <field name="NUM">1</field>
      </shadow>
    </value>
  </block>
</category>
<category name="文字">
    <block type="text_charAt">
      <mutation at="true"></mutation>
      <field name="WHERE">FROM_START</field>
      <value name="VALUE">
        <block type="variables_get">
          <field name="VAR" id="t2r9UiF+hb}NLt%[*SJC" variabletype="">text</field>
        </block>
      </value>
    </block>
    <block type="text">
      <field name="TEXT"></field>
    </block>
    <block type="text_append">
      <field name="VAR" id="^~1LG$HUI|D-WScPOx[x" variabletype="">item</field>
      <value name="TEXT">
        <shadow type="text">
          <field name="TEXT"></field>
        </shadow>
      </value>
    </block>
    <block type="text_length">
      <value name="VALUE">
        <shadow type="text">
          <field name="TEXT">abc</field>
        </shadow>
      </value>
    </block>
    <block type="text_isEmpty">
      <value name="VALUE">
        <shadow type="text">
          <field name="TEXT"></field>
        </shadow>
      </value>
    </block>
    <block type="text_indexOf">
      <field name="END">FIRST</field>
      <value name="VALUE">
        <block type="variables_get">
          <field name="VAR" id="t2r9UiF+hb}NLt%[*SJC" variabletype="">text</field>
        </block>
      </value>
      <value name="FIND">
        <shadow type="text">
          <field name="TEXT">abc</field>
        </shadow>
      </value>
    </block>
    <block type="text_join">
      <mutation items="2"></mutation>
    </block>
    <block type="text_getSubstring">
      <mutation at1="true" at2="true"></mutation>
      <field name="WHERE1">FROM_START</field>
      <field name="WHERE2">FROM_START</field>
      <value name="STRING">
        <block type="variables_get">
          <field name="VAR" id="t2r9UiF+hb}NLt%[*SJC" variabletype="">text</field>
        </block>
      </value>
    </block>
    <block type="text_changeCase">
      <field name="CASE">UPPERCASE</field>
      <value name="TEXT">
        <shadow type="text">
          <field name="TEXT">abc</field>
        </shadow>
      </value>
    </block>
    <block type="text_trim">
      <field name="MODE">BOTH</field>
      <value name="TEXT">
        <shadow type="text">
          <field name="TEXT">abc</field>
        </shadow>
      </value>
    </block>
    <block type="text_print">
      <value name="TEXT">
        <shadow type="text">
          <field name="TEXT">abc</field>
        </shadow>
      </value>
    </block>
    <block type="text_prompt_ext">
      <mutation type="TEXT"></mutation>
      <field name="TYPE">TEXT</field>
      <value name="TEXT">
        <shadow type="text">
          <field name="TEXT">abc</field>
        </shadow>
      </value>
    </block>
  </category>
<category name="列表">
  <block type="lists_create_with">
    <mutation items="0"></mutation>
  </block>
  <block type="lists_create_with">
    <mutation items="3"></mutation>
  </block>
  <block type="lists_length"></block>
  <block type="lists_isEmpty"></block>
</category>
<category name="函數" custom="PROCEDURE"></category>
<category name="變數" custom="VARIABLE"></category>
</xml>`;

 const xmlText2 = '<xml xmlns="http://www.w3.org/1999/xhtml"><variables><variable type="" id="Lq(*:4#{IgmuKrnt*/yw">i</variable><variable type="" id="@n=m2Xd(A8iX[B`7CQbM">動物</variable><variable type="" id="6Fs+YHuz4tgl7713cryH">步數</variable></variables><block type="procedures_defnoreturn" id="%:#hSaKn`vH|am9Z:v/W" x="75" y="45"><mutation><arg name="動物" varid="@n=m2Xd(A8iX[B`7CQbM"></arg><arg name="步數" varid="6Fs+YHuz4tgl7713cryH"></arg></mutation><field name="NAME">往前走</field><comment pinned="false" h="80" w="160">描述此函式...</comment><statement name="STACK"><block type="step" id="`VNbI}{tFz]Z_@l[yqWa"><value name="object"><block type="variables_get" id="V[*(Fa{7?tIy*5m~W|z3"><field name="VAR" id="@n=m2Xd(A8iX[B`7CQbM" variabletype="">動物</field></block></value><value name="step_number"><block type="variables_get" id="a;(O}s.Qn@/QH*;Zhn=r"><field name="VAR" id="6Fs+YHuz4tgl7713cryH" variabletype="">步數</field></block></value></block></statement></block><block type="controls_forEach" id="yG%~]x}MwBIDpD;Ou!TO" x="75" y="165"><field name="VAR" id="Lq(*:4#{IgmuKrnt*/yw" variabletype="">i</field><value name="LIST"><block type="lists_create_with" id="%?tslrcmzbSA[gCn)CVN"><mutation items="3"></mutation><value name="ADD0"><block type="beaver1" id="C?!jC`1g{]h.(BeVhzD+"></block></value><value name="ADD1"><block type="beaver2" id="Q~{mY3IFO6BUKzd^4(C6"></block></value><value name="ADD2"><block type="beaver3" id="-`!EgEor.c1xvYr`UEzw"></block></value></block></value><statement name="DO"><block type="procedures_callnoreturn" id="~f-VdzOWwKziw8EZ=/;I"><mutation name="往前走"><arg name="動物"></arg><arg name="步數"></arg></mutation><value name="ARG0"><block type="variables_get" id="h_C(}_lJa3dqyuWoAK^;"><field name="VAR" id="Lq(*:4#{IgmuKrnt*/yw" variabletype="">i</field></block></value><value name="ARG1"><block type="math_number" id="}PRC,!xz20;At[rNGw;9"><field name="NUM">10</field></block></value></block></statement><next><block type="step" id="TfB97E1w`|BR19#F._xz"><value name="object"><block type="monkey" id="WtG.wba6Bk}d.DJv.S,z"></block></value><value name="step_number"><block type="math_number" id="q]o%]tPmhP$Eu;QQh1Gz"><field name="NUM">30</field></block></value></block></next></block></xml>';
  // const xmlText2 = '<xml xmlns="http://www.w3.org/1999/xhtml"><variables><variable type="" id="@n=m2Xd(A8iX[B`7CQbM">動物</variable></variables><block type="variables_set" id=",{@%7DM[-6q-8L*%5iu|" x="105" y="105"><field name="VAR" id="@n=m2Xd(A8iX[B`7CQbM" variabletype="">動物</field><value name="VALUE"><block type="beaver1" id="x0Zh,,EFI@q*4E;)6Su@"></block></value></block><block type="step" id="`#axb7Ubt*8=LiQ1dm}j" x="105" y="165"><value name="object"><block type="variables_get" id="cp):igTXC@G4sf_6/VH1"><field name="VAR" id="@n=m2Xd(A8iX[B`7CQbM" variabletype="">動物</field></block></value><value name="step_number"><block type="math_number" id="3-;;k7|~Mb;2Uz;c%vNn"><field name="NUM">10</field></block></value></block></xml>';
