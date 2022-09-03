import { Column, Row } from 'components/common/styled/layout';
import DefaultLayoutMobile from 'components/templates/DefaultLayoutMobile';
import DefaultLayoutPC from 'components/templates/DefaultLayoutPC';
import React from 'react';
import { TEAMS_DATA } from './constants';
import { TeamsPageMobileWrapper, TeamsPagePCWrapper } from './styled';

const TeamsPage: React.FC = () => {
  return (
    <>
      <DefaultLayoutMobile>
        <TeamsPageMobileWrapper>
          <div className="mock-img"></div>
          <p className="description">
            안녕하세요 가을의 끝자락, 겨울에 초입에 서서 인사드립니다. 수많은 계절들 속에서 유독 마음이 설레는 계절이
            있다면 졸업 전시회가 있는 이맘때를 떠올립니다. 작은 걸음들이 모이고 모여 만들어진 오솔길은 산길에서 길 잃은
            이들을 위한 방향의 지표가 되기도 합니다. 사회라는 큰 산으로 접어드는 모든 졸업생들이 삶의 굴곡점을 맞이하여
            길을 잃을때면 모두의 발자국이 남아있는 이번 전시를 지표로 삼아 자신을 잃지 않길 바랍니다. 그 모든 기회와
            도움을 주신 분들에게 다시한번 진심어린 감사를 드립니다. 흘러가는 계절 속에서 졸업 전시라는 자리를 통하여
            귀한 인연을 만들게 되어 영광스럽고, 이 자리가 모두에게 의미있는 자리가 되길 바랍니다.
          </p>
          {TEAMS_DATA.map((team) => (
            <div key={team.name} className="team-list">
              <p className="team-name">{team.name}</p>
              <img src={team.imgSrc} alt={'mock'} />
              <Row>
                <p className="data-title">팀장 </p>
                <p className="data">{team.leader}</p>
              </Row>
              <Row>
                <p className="data-title">팀원 </p>
                <p className="data">{team.members.toString()}</p>
              </Row>
            </div>
          ))}
        </TeamsPageMobileWrapper>
      </DefaultLayoutMobile>
      <DefaultLayoutPC>
        <TeamsPagePCWrapper>
          <div className="mock-img"></div>
          <Row className="description-wrapper">
            <p className="description">
              안녕하세요 가을의 끝자락, 겨울에 초입에 서서 인사드립니다. 수많은 계절들 속에서 유독 마음이 설레는 계절이
              있다면 졸업 전시회가 있는 이맘때를 떠올립니다. 작은 걸음들이 모이고 모여 만들어진 오솔길은 산길에서 길
              잃은 이들을 위한 방향의 지표가 되기도 합니다. 사회라는 큰 산으로 접어드는 모든 졸업생들이 삶의 굴곡점을
            </p>
            <p className="description">
              맞이하여 길을 잃을때면 모두의 발자국이 남아있는 이번 전시를 지표로 삼아 자신을 잃지 않길 바랍니다. 그 모든
              기회와 도움을 주신 분들에게 다시한번 진심어린 감사를 드립니다. 흘러가는 계절 속에서 졸업 전시라는 자리를
              통하여 귀한 인연을 만들게 되어 영광스럽고, 이 자리가 모두에게 의미있는 자리가 되길 바랍니다.
            </p>
          </Row>

          {TEAMS_DATA.map((team) => (
            <div key={team.name} className="team-list">
              <p className="team-name">{team.name}</p>
              <Row>
                <img src={team.imgSrc} alt={'mock'} />
                <Column>
                  <Row>
                    <p className="data-title">팀장 </p>
                    <p className="data">{team.leader}</p>
                  </Row>
                  <Row>
                    <p className="data-title">팀원 </p>
                    <Column>
                      {team.members.map((member) => (
                        <p key={team + member} className="data">
                          {member}
                        </p>
                      ))}
                    </Column>
                  </Row>
                </Column>
              </Row>
            </div>
          ))}
        </TeamsPagePCWrapper>
      </DefaultLayoutPC>
    </>
  );
};

export default TeamsPage;
