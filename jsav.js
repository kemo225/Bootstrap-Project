document.getElementById("copyetoa").onclick=function ()
{
  if(document.getElementById("textareaetoa").value!=="" )
  {
        navigator.clipboard.writeText(document.getElementById("textareaetoa").value)

document.getElementById("etoabody").textContent="text copied"
  }
  else
  {
document.getElementById("etoabody").textContent="There is No Text to Copy"
  }
}
document.getElementById("copyatoe").onclick=function ()
{
  if(document.getElementById("textareaatoe").value!=="")
  {
  navigator.clipboard.writeText(document.getElementById("textareaatoe").value)
document.getElementById("atoebody").textContent="text copied"
  }
  else
  {
document.getElementById("atoebody").textContent="There is No Text to Copy"
  }
}
document.getElementById("copygtoa").onclick=function ()
{
  if(document.getElementById("textareagtoa").value!=="")
  {
    navigator.clipboard.writeText(document.getElementById("textareagtoa").value)
document.getElementById("gtoabody").textContent="text copied"
  }
  else
  {
document.getElementById("gtoabody").textContent="There is No Text to Copy"
  }
}
