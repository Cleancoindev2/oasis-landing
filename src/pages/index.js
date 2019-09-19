import React, { useState } from "react"

import styled from "styled-components"

import SEO from "../components/seo"

import "../styles/minireset.css"
import "./index.css"

import BatIcon from "../images/icons/bat.svg"
import ZrxIcon from "../images/icons/zrx.svg"
import DgdIcon from "../images/icons/dgd.svg"
import EthIcon from "../images/icons/eth.svg"
import MkrIcon from "../images/icons/mkr.svg"
import OmgIcon from "../images/icons/omg.svg"
import RepIcon from "../images/icons/rep.svg"
import UsdcIcon from "../images/icons/usdc.svg"
import WbtcIcon from "../images/icons/wbtc.svg"
import EmptyIcon from "../images/icons/empty.svg"

import Cross from "../images/cross.svg"
import Minus from "../images/minus.svg"
import { Helmet } from "react-helmet"

const Hero = styled.div`
  color: #1e2e3a;
  font-size: 38px;
  margin-top: 97px;
`

const Cards = styled.div`
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 80px auto;
  
  @media (max-width: 980px) {
    max-width: 300px;
  }
`

const Card = styled.div`
  overflow: hidden;
  border-radius: 15px;
  width: 300px;
  height: 355px;
  color: #ffffff;
  position: relative;
  
  @media (max-width: 980px) {
    margin-bottom: 35px;
  }

  .title {
    font-size: 29px;
    margin-top: 56px;
  }

  .description {
    font-size: 17px;
    line-height: 25px;
    margin-top: 25px;
    margin-right: 23px;
    margin-left: 23px;
    line-height: 26px;
  }

  .buttonContainer {
    position: absolute;
    bottom: 32px;
    width: 100%;
  }

  .button {
    padding-right: 22px;
    padding-left: 22px;
    border-radius: 6px;
    display: inline-block;
    font-size: 15px;
    font-weight: 500;
    height: 39px;
    line-height: 38px;
    text-decoration: none;
  }
  
  a:hover {
    opacity: 0.85;
  }
`

const TextSection = styled.div`
  margin-top: 81px;

  h3 {
    font-size: 30px;
    font-weight: normal;
    margin-bottom: 20px;
  }

  p {
    max-width: 580px;
    margin: 0 auto;
    font-size: 19px;
    line-height: 28px;
  }
`

const tokens = [
  {
    name: "Ethereum",
    icon: EthIcon,
  },
  {
    name: "Wrapped Bitcoin",
    icon: WbtcIcon,
  },
  {
    name: "USD Coin",
    icon: UsdcIcon,
  },
  {
    name: "OmiseGO",
    icon: OmgIcon,
  },
  {
    name: "Augur",
    icon: RepIcon,
  },
  {
    name: "0x",
    icon: ZrxIcon,
  },
  {
    name: "Digix Gold Token",
    icon: DgdIcon,
  },
]

const TokenList = styled.div`
  max-width: 978px;
  display: flex;
  justify-content: space-around;
  align-content: space-between;
  flex-wrap: wrap;
  margin: 43px auto;
  
  @media (max-width: 1000px) {
    max-width: 560px;
  }
`

const Token = ({ name, icon }) => {
  const Icon = icon || EmptyIcon
  return (
    <div style={{ display: "flex", alignItems: "center", margin: "20px 15px" }}>
      <Icon width="22" height="22" style={{flexGrow: 0, flexShrink: 0}}/>
      <span style={{ fontSize: "15px", lineHeight: "22px", marginLeft: "13px", flexGrow: 0, flexShrink: 0 }}>
        {name}
      </span>
    </div>
  )
}

const Questions = () => {
  const [selectedIndex, setSelectedIndex] = useState(null)

  const questions = [
    {
      q: "What is Oasis?",
      a:
        "Oasis is a decentralized application which runs on the Ethereum blockchain. Allowing anyone to trade tokens, borrow against them and earn savings using Dai.",
    },
    {
      q: "What is Dai?",
      a:
        <span>Dai is a stablecoin pegged to the USD. 1 Dai = $1 USD. Read more at <a href="https://makerdao.com/dai/" target="_blank">here</a>.</span>,
    },
    {
      q: "Do I need an account?",
      a:
        "You do not need an account to use Oasis. However, you will need an Ethereum wallet. Oasis supports most Ethereum wallets such as Metamask, Coinbase Wallet, Ledger.",
    },
    {
      q: "Why are Borrow and Save not yet available?",
      a:
        <span>Borrow and Save are features coming with the launch of Multi-Collateral Dai. You can track <a href="https://makerdao.com/roadmap/" target="_blank">Multi-Collateral Dai progress here</a>.</span>,
    },
    {
      q: "Is it secure?",
      a:
        "We conduct a range of audits on all of our smart contracts and the Oasis code is open-source.",
    },
    {
      q: "Are there fees?",
      a:
        "Oasis does not charge any fees, although you will have to pay gas costs for each transaction you make.",
    },
    {
      q: "I have a question, how can I get in contact with you?",
      a:
        <span>You can reach the team by contacting us on <a href="https://chat.makerdao.com" target="_blank">our chat</a>.</span>,
    },
    {
      q: "Can I buy Bitcoin or Ethereum with my bank account on Oasis?",
      a:
        "You cannot buy crypto from your bank account using Oasis. Instead you can use Dai, to buy Ethereum and other supported tokens. ",
    },
  ]

  return questions.map(({ q, a }, index) => {
    const isSelected = index === selectedIndex
    const Question = ({isSelected, index, children}) => {
      const Icon = isSelected ? Minus : Cross
      return (
        <div
          style={{ cursor: "pointer", marginRight: "25px" }}
          onClick={() => setSelectedIndex(isSelected ? null : index)}
        >
          {children}
          <Icon style={{ position: "absolute", right: "4px", top: "16px" }} />
        </div>
      )
    }
    return (
      <div
        style={{
          maxWidth: "632px",
          margin: "0 auto",
          textAlign: "left",
          fontSize: "18px",
          lineHeight: "25px",
        }}
        key={q}
      >
        <div
          style={{
            paddingTop: "14px",
            paddingBottom: "18px",
            letterSpacing: "0.007em",
            position: "relative",
          }}
        >
          <Question isSelected={isSelected} index={index}>{q}</Question>
        </div>
        {isSelected ? (
          <div
            style={{
              fontSize: "17px",
              paddingBottom: "21px",
              color: "#6F6F6F",
            }}
          >
            {a}
          </div>
        ) : null}
        {index < questions.length - 1 ? (
          <div style={{ borderBottom: "1px solid #9E9E9E", opacity: 0.9 }} />
        ) : null}
      </div>
    )
  })
}

const Header = styled.header`
  text-align: left;

  span {
    font-size: 21px;
    line-height: 25px;
    letter-spacing: 0.3px;
    font-weight: 500;
  }
`

const Nav = styled.nav`
  float: right;
  display: flex;
  justify-content: space-between;

  a {
    font-size: 17px;
    text-decoration: none;
    color: black;
    margin-left: 64px;
  }
`

const IndexPage = () => (
  <div
    style={{
      margin: `0 auto`,
      maxWidth: 1203,
      paddingTop: "41px",
    }}
  >
    <SEO title="Oasis" />
    <Helmet>
      <link rel="preload" href="/fonts/fonts.css" as="style" />
    </Helmet>
    <Header>
      <span>Oasis</span>
    </Header>
    <Hero>Trade, borrow and save using Dai.</Hero>
    <Cards>
      <Card style={{background: "linear-gradient(180deg, #C2D7E4 0%, #DBF1EC 100%), #7AAAC5"}}>
        <div className="title" style={{color: "#253A44"}}>Trade</div>
        <div className="description" style={{color: "#14303A"}}>
          The most secure way to trade.
          Wallet to wallet token trading.
          Decentralized leverage.
        </div>
        <div className="buttonContainer">
          <a href="https://oasis.app/trade" className="button" style={{color: "#5894B5", backgroundColor: "white", boxShadow: "0px 2px 2px #C8E4E6"}}>
            Start Trading
          </a>
        </div>
      </Card>
      <Card style={{
        background: "linear-gradient(180deg, #F0DED8 0%, #FDF2E1 100%), linear-gradient(0deg, #EFBF98, #EFBF98)",
      }}>
        <div className="title" style={{color: "#5B2E1B"}}>Borrow</div>
        <div className="description" style={{color: "#5B2E1B"}}>
          Lock your tokens to borrow Dai, a decentralized cryptocurrency pegged to the value of 1 USD.
        </div>
        <div className="buttonContainer">
          <div className="button" style={{color: "#5D2D00", opacity: 0.6}}>Coming Soon</div>
        </div>
      </Card>
      <Card style={{ background: "linear-gradient(180deg, #D5E8E3 0%, #EEF0E4 100%)", marginBottom: 0 }}>
        <div className="title" style={{color: "#002F28"}}>Save</div>
        <div className="description" style={{color: "#002F28"}}>
          Earn savings on your Dai by locking it into a Maker Vault. Automatic and non-custodial.
        </div>
        <div className="buttonContainer">
          <div className="button" style={{color: "#002F28", opacity: 0.6}}>Coming Soon</div>
        </div>
      </Card>
    </Cards>
    <TextSection style={{ marginTop: "103px" }}>
      <h3>Supported Tokens</h3>
      <TokenList>
        {tokens.map(({ name, icon }) => (
          <Token name={name} icon={icon} key={name} />
        ))}
      </TokenList>
    </TextSection>
    <TextSection style={{ marginTop: "108px" }}>
      <h3>What's the Story</h3>
      <p>
        Oasis is a platform for decentralized finance. Use it to trade tokens, borrow Dai and earn savings — all in one place.
      </p>
    </TextSection>
    <TextSection>
      <h3>Secure protocol built on Ethereum</h3>
      <p>
        Oasis is built on top of formally verified smart contracts created by
        The Maker Foundation, the industry leader in secure decentralized
        finance.
      </p>
    </TextSection>
    <TextSection>
      <h3>Completely Permissionless</h3>
      <p>
        Anyone can access the system simply by using a wallet address, and you never have to trust a counterparty institution to approve your activity.
      </p>
    </TextSection>
    <TextSection>
      <h3>Questions</h3>
      <Questions />
    </TextSection>
    <footer>
      © {new Date().getFullYear()} Maker Ecosystem Growth Holdings, Inc.
      <Nav>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
      </Nav>
    </footer>
  </div>
)

export default IndexPage
