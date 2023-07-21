// IN: our script readrs the child content width, padding, border, margin in pixels
//    also the script readrs the parent content widt

// FACT: we know the mode of the box-sizing (content/border) and the formula

// OUT: print the total width of the child, print if it fits, print the overflow offset

// H2: print HOW MUCH OVERFLOW in px?

// <div>  ----           parent
//     <div></div> ----  child
// <div>



// unit-px
childWidth = 100
childPadding = 10
childBorder = 1
childMargin = 20

parentWidth = 110

childSize = childWidth + ( childPadding + childBorder + childMargin ) * 2

overflow  = childSize > parentWidth // Boolean

overflowSize = childSize - parentWidth

alert( "Horizontal child size" + childSize + "px" )
alert("child overflow ?" + overflow )
alert( "overflow size" + overflowSize + "px" )

