# web3js 라이브러리 설치
npm install web3js

# 작성한 contract
src/contracts/voteCount.sol

# 작성한 javascript
web3js/index.js



vscode 확장 프로그램 설치
live server 

# 브라우저에서 콘솔 확인   
http://127.0.0.1:5500/web3js/


--------------------------------
콘솔
--------------------------------

0. 계정(account) >>>>  ["0x9d5Ab851e9B2f8c7173518464dF4Bb68F1d1e345","0x18E05A6261fd9D73ed32677E20640d4814094f87","0x797dF12D841eDBdB272d6D51467D6398Ff861f35","0x26fB9084b42a2430a2B595620C3A654C1Ac4457b","0xB1c0a31940015759c69D0FdfF9749CE45038bDB9","0x791853D81FA6c17F780a7c5092F0d65Eeb6Dec76","0xD6c7f908070c86a29AbD373a4fdDFe668839fdF6","0x9CD4DaC4c7A79f10AdC60E26Db617F11ff99355d","0x60811430Ed552f9881F6B3646D2455a253785c19","0x788cf813e84aF431f593D2364B5e7d3eEe556f4a"]
1. 잔액(balance) >>> "99807899200000000000" [wei]

-------------------------------------------------
-------------------------------------------------

2-1. ABI_CODE >>>>> [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"get","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x6d4ce63c"}]

-------------------------------------------------
2-2. ADDRESS >>>>> "0x9d5Ab851e9B2f8c7173518464dF4Bb68F1d1e345"


3. contract 호출
4. get에 접근해서 호출한 결과 >>>> person1

--------------------------------

--------------------------------



# web3js 참고한 사이트

https://muyu.tistory.com/entry/Ethereum-web3js-%EC%82%AC%EC%9A%A9%EB%B2%95-%EA%B0%84%EB%8B%A8-%EC%9A%94%EC%95%BD
https://dukdukz.tistory.com/entry/%EB%B8%94%EB%A1%9D%EC%B2%B4%EC%9D%B8-%EC%8A%A4%EB%A7%88%ED%8A%B8-%EC%BB%A8%ED%8A%B8%EB%A0%89%ED%8A%B8-%EA%B0%84%EB%8B%A8-%EC%8B%A4%EC%8A%B5
