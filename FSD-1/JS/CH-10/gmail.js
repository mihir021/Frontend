function Gmail(){
    pat = /^\w+([.-]?\w+)*@\w+([.]?\w+)*(\.\w{2,3})+$/
    // ^ --> starts with  
    // \w --> name(lettes + numbers + _)
    // ([.-]?\w+)* --> optionl . or - in name -> abc.abc , abc-abc
    //  @ must have @
    // \w domain name 
    // ([.]?\w+)* subDomain mail.nic
    // (\.\w{2,3}) --> Domain extension .com , .in , .co.in
    // $ end
}