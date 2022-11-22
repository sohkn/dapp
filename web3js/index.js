function test1() {
  var ADDRESS = "0x9d5Ab851e9B2f8c7173518464dF4Bb68F1d1e345";
    
  // 컴파일시 생성된 abi (바이너리 코드와 데이터를 실행시키기 위한 JSON) 파일과 bin(바이너리) 파일 ==> 코드를 실행시키기 위한 키값 역할
    // string -> json 변환
    var ABI_CODE = JSON.parse(
      '[{"inputs": [],"stateMutability": "nonpayable","type":"constructor"},{"inputs": [],"name": "get","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type":"function"}]'
    );
  
    var BYTECODE =
    "608060405234801561001057600080fd5b506040518060400160405280600781526020017f706572736f6e31000000000000000000000000000000000000000000000000008152506000908051906020019061005c929190610062565b50610166565b82805461006e90610105565b90600052602060002090601f01602090048101928261009057600085556100d7565b82601f106100a957805160ff19168380011785556100d7565b828001600101855582156100d7579182015b828111156100d65782518255916020019190600101906100bb565b5b5090506100e491906100e8565b5090565b5b808211156101015760008160009055506001016100e9565b5090565b6000600282049050600182168061011d57607f821691505b6020821081141561013157610130610137565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b610232806101756000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80636d4ce63c14610030575b600080fd5b61003861004e565b6040516100459190610119565b60405180910390f35b60606000805461005d9061018a565b80601f01602080910402602001604051908101604052809291908181526020018280546100899061018a565b80156100d65780601f106100ab576101008083540402835291602001916100d6565b820191906000526020600020905b8154815290600101906020018083116100b957829003601f168201915b5050505050905090565b60006100eb8261013b565b6100f58185610146565b9350610105818560208601610157565b61010e816101eb565b840191505092915050565b6000602082019050818103600083015261013381846100e0565b905092915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561017557808201518184015260208101905061015a565b83811115610184576000848401525b50505050565b600060028204905060018216806101a257607f821691505b602082108114156101b6576101b56101bc565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f830116905091905056fea2646970667358221220ac018263186f1cd37b5609ccd3350f04ba57755693aac1685bba6964ca84933c64736f6c63430008060033";

  
  // http 에서 동작하는 node 에 연결하기 위해 HttpProvider 를 사용해 web3 객체 생성
  var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));



  // 0. rpc 통신 -> 계정 얻기
  web3.eth
    .getAccounts()
    .then((data) => {
      console.log(`0. 계정(account) >>>>  ${JSON.stringify(data)}`);
    })
    .catch((err) => {
      console.log(`0. err >> ${JSON.stringify(err)}`);
    });




  // 1. 이더리움 내 state 조회 - web3가 제공하는 api 호출
  var balance = web3.eth
    .getBalance(ADDRESS)
    .then((data) => {
      console.log(`1. 잔액(balance) >>> ${JSON.stringify(data)} [wei]`);



      // 2. 컴파일 후 생성된 abi, bin 파일을 web3 통신을 통해서 web에 전달
  var contract = new web3.eth.Contract(ABI_CODE);

  // for (output in contract) {
  //   console.log('2. contract >>>>> ' + JSON.stringify(output));
  // }
  
  console.log(`-------------------------------------------------`);
  console.log(`-------------------------------------------------`);
  console.log(`2-1. ABI_CODE >>>>> ${JSON.stringify(ABI_CODE)}`);
  console.log(`-------------------------------------------------`);
  console.log(`2-2. ADDRESS >>>>> ${JSON.stringify(ADDRESS)}`);




  // 3.contract 호출 -> 코드 실행
  contract
    .deploy({
      data: BYTECODE,
    })
    .send({
      from: ADDRESS,
      gas: "3567896", // gas limit
    })
    .then((data) => {
      // send 의 결과 값이 promise 객체로 반환
      //console.log("3. contract 호출한 결과 값 >>> "+ JSON.stringify(data));
      for(output in data){
        console.log(output)
      }
      console.log('3. contract 호출' );
      return data.methods.get().call();
    })
    .then(result => {
      // src/contracts/voteCount.sol 에서 return 한 string 출력
      console.log("4. get에 접근해서 호출한 결과 >>>> "+result)
    })
    .catch((err) => {
      console.log('3. err >>> ' + err);
    });
    })
    .catch((err) => {
      console.log(`1. err >> ${JSON.stringify(err)}`);
    });




  
}

test1();
