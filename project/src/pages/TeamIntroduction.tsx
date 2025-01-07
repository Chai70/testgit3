import React from 'react';
import Container from '../components/ui/Container';
import { gradients } from '../styles/gradients';
import { teamMembers } from '../constants/team';

const TeamIntroduction: React.FC = () => {

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
            alt="Team Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className={`absolute inset-0 ${gradients.overlay}`}></div>
        </div>
        <Container className="relative z-10 text-center py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            我们的团队
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            我们拥有一支充满激情和创造力的专业团队，每位成员都在各自领域具有丰富的经验和专业知识。
            团队成员彼此协作、互相启发，共同为客户提供最优质的服务和解决方案。
          </p>
        </Container>
      </section>

      {/* Team Members Section */}
      <section className="flex-grow py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100"
              >
                <div className="relative mx-auto w-48 h-48 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-10 blur-lg transform scale-110"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative w-full h-full rounded-full object-cover border-4 border-white shadow-md"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <h4 className="text-lg font-medium text-blue-600 mb-4">{member.position}</h4>
                <p className="text-gray-600 leading-relaxed mb-6">{member.description}</p>
                <div className="flex justify-center">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default TeamIntroduction;
