import React, { useState, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import Navbar from '../../components/navigation/Navbar';
import { Upload, Mic, Link as LinkIcon, X, Play, Pause, Send } from 'lucide-react';

function UploadCurriculumPage() {
  const [files, setFiles] = useState([]);
  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showChatbot, setShowChatbot] = useState(true);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const onDrop = (acceptedFiles) => {
    setFiles((prev) => [
      ...prev,
      ...acceptedFiles.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      })),
    ]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif'],
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'video/*': ['.mp4', '.webm'],
      'audio/*': ['.mp3', '.wav'],
    },
  });

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          audioChunksRef.current.push(e.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        setAudioBlob(audioBlob);
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (err) {
      console.error('Error accessing microphone:', err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const playAudio = () => {
    if (audioBlob) {
      const audio = new Audio(URL.createObjectURL(audioBlob));
      audio.play();
      setIsPlaying(true);
      audio.onended = () => setIsPlaying(false);
    }
  };

  const addLink = () => {
    if (newLink && !links.includes(newLink)) {
      setLinks((prev) => [...prev, newLink]);
      setNewLink('');
    }
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const removeLink = (index) => {
    setLinks((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    files.forEach(({ file }) => formData.append('files', file));
    if (audioBlob) {
      formData.append('audio', audioBlob);
    }
    formData.append('links', JSON.stringify(links));

    // TODO: Implement API call to handle upload
    console.log('Submitting form data:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
        <div className="bg-white shadow-soft rounded-lg p-4 sm:p-6 lg:p-8">
          <h1 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-4 sm:mb-6">
            Upload Curriculum Content
          </h1>

          {/* File Upload Section */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-lg font-semibold mb-4">Upload Files</h2>
            <div
              {...getRootProps()}
              className="border-2 border-dashed border-gray-300 rounded-lg p-6 sm:p-8 text-center hover:border-primary-500 transition-colors cursor-pointer"
            >
              <input {...getInputProps()} />
              <Upload className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-gray-400 mb-4" />
              <p className="text-gray-600 text-sm sm:text-base">
                Drag and drop files here, or click to select files
              </p>
              <p className="text-xs sm:text-sm text-gray-500 mt-2">
                Support for documents, images, videos, and audio files
              </p>
            </div>

            {/* File Preview */}
            {files.length > 0 && (
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {files.map((file, index) => (
                  <div key={index} className="relative group">
                    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-gray-100">
                      {file.file.type.startsWith('image/') ? (
                        <img
                          src={file.preview}
                          alt={file.file.name}
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <p className="text-sm text-gray-500">{file.file.name}</p>
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => removeFile(index)}
                      className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Voice Recording Section */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-lg font-semibold mb-4">Voice Recording</h2>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={isRecording ? stopRecording : startRecording}
                className={`flex items-center px-4 py-2 rounded-md ${
                  isRecording
                    ? 'bg-red-500 hover:bg-red-600'
                    : 'bg-primary-500 hover:bg-primary-600'
                } text-white`}
              >
                <Mic className="h-5 w-5 mr-2" />
                {isRecording ? 'Stop Recording' : 'Start Recording'}
              </button>

              {audioBlob && (
                <button
                  onClick={playAudio}
                  className="flex items-center px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200"
                >
                  {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                </button>
              )}
            </div>
          </div>

          {/* Link Sharing Section */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-lg font-semibold mb-4">Add External Links</h2>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-2">
              <input
                type="url"
                value={newLink}
                onChange={(e) => setNewLink(e.target.value)}
                placeholder="Enter URL"
                className="flex-1 rounded-md border border-gray-300 px-4 py-2 focus:border-primary-500 focus:ring-primary-500"
              />
              <button
                onClick={addLink}
                className="flex items-center px-4 py-2 rounded-md bg-primary-500 text-white hover:bg-primary-600"
              >
                <LinkIcon className="h-5 w-5 mr-2" />
                Add Link
              </button>
            </div>

            {/* Link List */}
            {links.length > 0 && (
              <div className="mt-4 space-y-2">
                {links.map((link, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-gray-50 p-3 rounded-md"
                  >
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-500 hover:text-primary-600"
                    >
                      {link}
                    </a>
                    <button
                      onClick={() => removeLink(index)}
                      className="text-red-500 hover:text-red-600"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              onClick={handleSubmit}
              className="flex items-center px-6 py-3 bg-primary-500 text-white rounded-md hover:bg-primary-600"
            >
              <Send className="h-5 w-5 mr-2" />
              Upload Content
            </button>
          </div>

          {/* Chatbot */}
          {showChatbot && (
            <div className="fixed bottom-4 right-4 w-80 sm:w-96 bg-white rounded-lg shadow-xl">
              <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="font-semibold">Help Assistant</h3>
                <button
                  onClick={() => setShowChatbot(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="h-72 sm:h-96 overflow-y-auto p-4">
                {/* Chatbot content will be rendered here */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UploadCurriculumPage;