function setUpBlock() {
  Blockly.Blocks['monster_1'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("怪物一");
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['monster_2'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("怪物二");
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['monster_3'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("怪物三");
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['boss'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("大魔王");
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['attack'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("騎士攻擊");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['is_equal'] = {
    init: function() {
      this.appendValueInput("object_1")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("是");
      this.appendValueInput("object_2")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("嗎?");
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['step'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("騎士往");
      this.appendValueInput("target")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("走去");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['monster_1'] = (block) => 'monster_1';
  Blockly.JavaScript['monster_2'] = (block) => 'monster_2';
  Blockly.JavaScript['monster_3'] = (block) => 'monster_3';
  Blockly.JavaScript['boss'] = (block) => 'boss';
  Blockly.JavaScript['attack'] = (block) => `diveLinker.Send(parseInt(diveState['knight']['attack']['diveID']),parseInt(diveState['knight']['attack']['value']), true);`;
  Blockly.JavaScript['is_equal'] = (block) => {
    let object_1, object_2;
    try {
      object_1 = Blockly.JavaScript.statementToCode(block, 'object_1', Blockly.JavaScript.ORDER_ATOMIC).trim()
      try {
        object_2 = `'${Blockly.JavaScript.statementToCode(block, 'object_2', Blockly.JavaScript.ORDER_ATOMIC).trim()}'`;
      }
      catch (e) {
        object_2 = Blockly.JavaScript.valueToCode(block, 'object_2', Blockly.JavaScript.ORDER_ATOMIC).trim()
      }
    }
    catch (e) {
      object_1 = Blockly.JavaScript.valueToCode(block, 'object_1', Blockly.JavaScript.ORDER_ATOMIC).trim()
      try {
        object_2 = `'${Blockly.JavaScript.statementToCode(block, 'object_2', Blockly.JavaScript.ORDER_ATOMIC).trim()}'`;
      }
      catch (e) {
        object_2 = Blockly.JavaScript.valueToCode(block, 'object_2', Blockly.JavaScript.ORDER_ATOMIC).trim()
      }
    }
    return `${object_1} === ${object_2}`;
  }
  Blockly.JavaScript['step'] = (block) => {
    try {
      const object = Blockly.JavaScript.statementToCode(block, 'target', Blockly.JavaScript.ORDER_ATOMIC).trim();
      return `diveLinker.Send(parseInt(diveState['${object}']['move']['diveID']),parseInt(diveState['${object}']['move']['value']), true);`;
    }
    catch (e) {
      const object = Blockly.JavaScript.valueToCode(block, 'target', Blockly.JavaScript.ORDER_ATOMIC).trim()
      return `diveLinker.Send(parseInt(diveState[${object}]['move']['diveID']),parseInt(diveState[${object}]['move']['value']), true);`;
    }
  };
}

const diveState = {
  'monster_1': {
    move: {
      diveID: '1539930820722',
      value: '1'
    }
  },
  'monster_2': {
    move: {
      diveID: '1539930820722',
      value: '2'
    }
  },
  'monster_3': {
    move: {
      diveID: '1539930820722',
      value: '3'
    }
  },
  'boss': {
    move: {
      diveID: '1539930820722',
      value: '4'
    }
  },
  'knight': {
    attack: {
      diveID: '1540391040595',
      value: '1'
    }
  },
};

const xml = `<xml xmlns="http://www.w3.org/1999/xhtml" id="toolbox" style="display: none;">
<category name="語意">
<block type="monster_1"></block>
<block type="monster_2"></block>
<block type="monster_3"></block>
<block type="boss"></block>
<block type="is_equal"></block>
<block type="attack"></block>
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

 const xmlText2 = '<xml xmlns="http://www.w3.org/1999/xhtml"><variables><variable type="" id="Lq(*:4#{IgmuKrnt*/yw">i</variable></variables><block type="controls_forEach" id="kD@DR;Su^!Lkx.,Y~PSZ" x="75" y="105"><field name="VAR" id="Lq(*:4#{IgmuKrnt*/yw" variabletype="">i</field><value name="LIST"><block type="lists_create_with" id=")rdiI3@R?+i4h*));!3E"><mutation items="4"></mutation><value name="ADD0"><block type="monster_1" id="{Ml{jd?%W.V)}4a0g.T["></block></value><value name="ADD1"><block type="monster_2" id="m}=_-KyJOv@@U2v#y(Ks"></block></value><value name="ADD2"><block type="monster_3" id="Qrdq:[OJW9x6`yVyu{9y"></block></value><value name="ADD3"><block type="boss" id="QU+#p-Ik^sMn,:wiGfrt"></block></value></block></value><statement name="DO"><block type="step" id="imyb%rKKR][zeVm4#1Sk"><value name="target"><block type="variables_get" id="CdeO!t=-Xw~PUcQ)M8;O"><field name="VAR" id="Lq(*:4#{IgmuKrnt*/yw" variabletype="">i</field></block></value><next><block type="controls_if" id="ebn%`Ex1hB^_0;Vl188G"><mutation else="1"></mutation><value name="IF0"><block type="is_equal" id="RKe![v9^@L$,JCC0,+Q:"><value name="object_1"><block type="variables_get" id="nMU^ZooT3:CEn4TGu0Wp"><field name="VAR" id="Lq(*:4#{IgmuKrnt*/yw" variabletype="">i</field></block></value><value name="object_2"><block type="boss" id="bcY6Q0J|3qDBc]k$4zv6"></block></value></block></value><statement name="DO0"><block type="controls_repeat_ext" id="b*LE8}Pe[(@i,qw6D_V*"><value name="TIMES"><shadow type="math_number" id="q8K1w{UXbHk`op:k:XFa"><field name="NUM">10</field></shadow><block type="math_number" id="WFg{W#Lq[E.|6jL+tH!?"><field name="NUM">3</field></block></value><statement name="DO"><block type="attack" id=",-n.e;J;FPm}{CC1+JsK"><value name="target"><block type="variables_get" id="R(`o*)q:_g;IBovAypRr"><field name="VAR" id="Lq(*:4#{IgmuKrnt*/yw" variabletype="">i</field></block></value></block></statement></block></statement><statement name="ELSE"><block type="attack" id="d7zjK5B2u9d3A;R(,;?o"><value name="target"><block type="variables_get" id="F,iJ07m!=KgMhJVv~rmh"><field name="VAR" id="Lq(*:4#{IgmuKrnt*/yw" variabletype="">i</field></block></value></block></statement></block></next></block></statement></block></xml>';
//  const xmlText2 = '<xml xmlns="http://www.w3.org/1999/xhtml"><variables><variable type="" id="Lq(*:4#{IgmuKrnt*/yw">i</variable></variables><block type="controls_forEach" id="kD@DR;Su^!Lkx.,Y~PSZ" x="75" y="105"><field name="VAR" id="Lq(*:4#{IgmuKrnt*/yw" variabletype="">i</field><value name="LIST"><block type="lists_create_with" id=")rdiI3@R?+i4h*));!3E"><mutation items="4"></mutation><value name="ADD0"><block type="monster_1" id="{Ml{jd?%W.V)}4a0g.T["></block></value><value name="ADD1"><block type="monster_2" id="m}=_-KyJOv@@U2v#y(Ks"></block></value><value name="ADD2"><block type="monster_3" id="Qrdq:[OJW9x6`yVyu{9y"></block></value><value name="ADD3"><block type="boss" id="QU+#p-Ik^sMn,:wiGfrt"></block></value></block></value><statement name="DO"><block type="controls_if" id="ebn%`Ex1hB^_0;Vl188G"><mutation else="1"></mutation><value name="IF0"><block type="is_equal" id="RKe![v9^@L$,JCC0,+Q:"><value name="object_1"><block type="variables_get" id="nMU^ZooT3:CEn4TGu0Wp"><field name="VAR" id="Lq(*:4#{IgmuKrnt*/yw" variabletype="">i</field></block></value><value name="object_2"><block type="boss" id="bcY6Q0J|3qDBc]k$4zv6"></block></value></block></value><statement name="DO0"><block type="text_print" id="X;Bw#7y#+.6+lWb4BDkB"><value name="TEXT"><shadow type="text" id="iLocE)6JxNc8[ODt;d3H"><field name="TEXT">abc</field></shadow><block type="variables_get" id="n7DKREcpcNh=_vd=?zZV"><field name="VAR" id="Lq(*:4#{IgmuKrnt*/yw" variabletype="">i</field></block></value></block></statement><statement name="ELSE"><block type="text_print" id="$+*9`[gi7t2=]vziym~:"><value name="TEXT"><shadow type="text" id="]o~Iv)~kepz13E`IxK}P"><field name="TEXT">abc</field></shadow><block type="text" id="r]FUf@8U$}6$J$2PWsj["><field name="TEXT">1234</field></block></value></block></statement></block></statement></block></xml>';
