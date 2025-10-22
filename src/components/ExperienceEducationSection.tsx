'use client';

import { motion } from 'framer-motion';
import { experiences, education } from '@/data/ProfessionalExperienceEducation';
import { 
  BriefcaseIcon, 
  AcademicCapIcon,
  MapPinIcon,
  CalendarIcon,
  ArrowTopRightOnSquareIcon,
  CheckCircleIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function Experience() {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey and academic background
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('experience')}
            className={`px-8 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'experience'
                ? 'bg-gradient-to-r from-lime-600 to-emerald-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
            }`}
          >
            <BriefcaseIcon className="w-5 h-5" />
            Work Experience
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`px-8 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'education'
                ? 'bg-gradient-to-r from-lime-600 to-emerald-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
            }`}
          >
            <AcademicCapIcon className="w-5 h-5" />
            Education
          </button>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-lime-500 to-emerald-500" />

          {activeTab === 'experience' ? (
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-lime-500 rounded-full border-4 border-white dark:border-gray-900 z-10 transform -translate-x-1/2" />

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-shadow">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <BriefcaseIcon className="w-5 h-5 text-lime-600 dark:text-lime-400" />
                            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                              exp.type === 'Full-time' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' :
                              exp.type === 'Freelance' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' :
                              'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                            }`}>
                              {exp.type}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            {exp.position}
                          </h3>
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lime-600 dark:text-lime-400 font-semibold hover:underline flex items-center gap-1"
                          >
                            {exp.company}
                            {exp.companyUrl && <ArrowTopRightOnSquareIcon className="w-4 h-4" />}
                          </a>
                        </div>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                        <span className="flex items-center gap-1">
                          <CalendarIcon className="w-4 h-4" />
                          {exp.startDate} - {exp.endDate}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPinIcon className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {exp.description}
                      </p>

                      {/* Responsibilities */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                          <CheckCircleIcon className="w-4 h-4 text-lime-500" />
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-1">
                          {exp.responsibilities.slice(0, 3).map((resp, idx) => (
                            <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                              <span className="text-lime-500 mt-1">•</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Achievements */}
                      {exp.achievements && exp.achievements.length > 0 && (
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                            <TrophyIcon className="w-4 h-4 text-yellow-500" />
                            Achievements
                          </h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                                <span className="text-yellow-500 mt-1">★</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-medium bg-lime-50 dark:bg-lime-900/30 text-lime-700 dark:text-lime-300 rounded-lg border border-lime-200 dark:border-lime-900/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative flex items-center justify-center"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-lime-500 rounded-full border-4 border-white dark:border-gray-900 z-10 transform -translate-x-1/2" />

                  {/* Content Card */}
                  <div className="w-full md:w-7/12 ml-16 md:ml-0">
                    <div className="bg-gradient-to-br from-lime-50 to-emerald-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl shadow-xl p-8 border-2 border-lime-200 dark:border-gray-700">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-lime-600 rounded-xl">
                          <AcademicCapIcon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {edu.degree}
                          </h3>
                          <p className="text-lg text-lime-600 dark:text-lime-400 font-semibold">
                            {edu.field}
                          </p>
                        </div>
                      </div>

                      <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        {edu.institution}
                      </p>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                        <span className="flex items-center gap-1">
                          <CalendarIcon className="w-4 h-4" />
                          {edu.startDate} - {edu.endDate}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPinIcon className="w-4 h-4" />
                          {edu.location}
                        </span>
                        {edu.gpa && (
                          <span className="px-3 py-1 bg-lime-600 text-white rounded-full font-semibold text-xs">
                            GPA: {edu.gpa}
                          </span>
                        )}
                      </div>

                      {edu.description && (
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                          {edu.description}
                        </p>
                      )}

                      {edu.honors && edu.honors.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {edu.honors.map((honor) => (
                            <span
                              key={honor}
                              className="px-3 py-1.5 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-lg text-sm font-medium flex items-center gap-1"
                            >
                              <TrophyIcon className="w-4 h-4" />
                              {honor}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
