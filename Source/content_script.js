walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bDrake\b/g, "Carlos Santana featuring Rob Thomas");
	v = v.replace(/\bdrake\b/g, "Carlos Santana featuring Rob Thomas");

	v = v.replace(/\bHotline Bling\b/g, "Smooth");
	v = v.replace(/\bhotline bling\b/g, "Smooth");
	v = v.replace(/\bHotline bling\b/g, "Smooth");
	v = v.replace(/\bhotline Bling\b/g, "Smooth");
	
	textNode.nodeValue = v;
}


