import React from 'react'
import styled from 'styled-components'
import { linkData } from '../../../store/mock'
const Wrapper = styled.section`
  &.link-wrap {
    margin-bottom: 52px;
    .links {
      margin-bottom: 15px;
      text-decoration: underline;
    }
  }
`

const Links = () => {
  return (
    <Wrapper className="link-wrap">
      {linkData.map(({ title, message }) => {
        return (
          <div key={title}>
            <h2>{title}</h2>
            {message.map(({ link, info }) => {
              return (
                <h4 key={info}>
                  {link ? (
                    <a className="links" href={link}>
                      {info}
                    </a>
                  ) : (
                    <span>{info}</span>
                  )}
                </h4>
              )
            })}
          </div>
        )
      })}
    </Wrapper>
  )
}

export default Links
